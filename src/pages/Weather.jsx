import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';

const Weather = () => {
    const [chartData, setChartData] = useState(null);    
    const [chartDataeva, setChartDataeva] = useState(null);    
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const formatDate = (date) => {
        const pad = (number) => (number < 10 ? `0${number}` : number);

        const year = date.getFullYear();
        const month = pad(date.getMonth() + 1); 
        const day = pad(date.getDate());
        const hours = pad(date.getHours());
        const minutes = pad(date.getMinutes());
        const seconds = pad(date.getSeconds());
        const timezoneOffset = -date.getTimezoneOffset(); 
        const offsetSign = timezoneOffset >= 0 ? '+' : '-';
        const offsetHours = pad(Math.floor(Math.abs(timezoneOffset) / 60));
        const offsetMinutes = pad(Math.abs(timezoneOffset) % 60);

        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.000${offsetSign}${offsetHours}:${offsetMinutes}`;
    };

    const getLocation = () => {
        if (navigator.geolocation) {
            setLoading(true);
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const newLocation = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    };
                    setLocation(newLocation);
                    setError(null);
                    setLoading(false);
                    localStorage.setItem('userLocation', JSON.stringify(newLocation));
                },
                (err) => {
                    setError('Error al obtener la ubicación. Por favor, verifica los permisos.');
                    setLoading(false);
                }
            );
        } else {
            setError('La geolocalización no es compatible con este navegador.');
        }
    };

    const fetchWeatherData = async (lat, lon) => {
        try {
            const username = 'martinez_gael';
            const password = '9Sn3E4IQpn';
            const endDate = new Date();
            const startDate = new Date();
            startDate.setDate(endDate.getDate() - 14);
            const formattedStartDate = formatDate(startDate);
            const formattedEndDate = formatDate(endDate);

            const url = `https://api.meteomatics.com/${formattedStartDate}--${formattedEndDate}:P1D/t_2m:C,relative_humidity_2m:p/${lat},${lon}/csv`;            
            const urleva = `https://api.meteomatics.com/${formattedStartDate}--${formattedEndDate}:P1D/evapotranspiration_24h:mm/${lat},${lon}/csv`;

            const response = await axios.get(url, {
                headers: {
                    'Authorization': 'Basic ' + btoa(`${username}:${password}`)
                }
            });

            const responseva = await axios.get(urleva, {
                headers: {
                    'Authorization': 'Basic ' + btoa(`${username}:${password}`)
                }
            });

            const data = response.data;
            const parsedData = parseCSVData(data);
            const dataeva = responseva.data; // Cambiado para usar los datos correctos
            const parsedDataeva = parseCSVEvapotranspiration(dataeva); // Usando una función diferente para parsear
            setChartData(parsedData);
            setChartDataeva(parsedDataeva);
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setError('Error al obtener los datos meteorológicos.');
        }
    };
    
    const parseCSVData = (csv) => {
        const lines = csv.split('\n');
        const categories = [];
        const temperature = [];
        const humidity = [];
        
        for (let i = 1; i < lines.length; i++) {
            const [date, temp, hum] = lines[i].split(';');
            if (date && temp && hum) {
                categories.push(new Date(date).toLocaleString());
                temperature.push(parseFloat(temp));
                humidity.push(parseFloat(hum));
            }
        }

        return {
            categories,
            temperature,
            humidity
        };
    };

    // Función para parsear los datos de evapotranspiración
    const parseCSVEvapotranspiration = (csv) => {
        const lines = csv.split('\n');
        const categories = [];
        const evapotranspiration = [];

        for (let i = 1; i < lines.length; i++) {
            const [date, evap] = lines[i].split(';');
            if (date && evap) {
                categories.push(new Date(date).toLocaleString());
                evapotranspiration.push(parseFloat(evap));
            }
        }

        return {
            categories,
            evapotranspiration
        };
    };

    useEffect(() => {
        const savedLocation = JSON.parse(localStorage.getItem('userLocation'));
        if (savedLocation && savedLocation.latitude && savedLocation.longitude) {
            setLocation(savedLocation);
        }
    }, []);

    useEffect(() => {
        if (location.latitude && location.longitude) {
            fetchWeatherData(location.latitude, location.longitude);
        }
    }, [location]);

    const options = {
        title: {
            text: 'Humedad y Temperatura'
        },
        xAxis: {
            categories: chartData ? chartData.categories : []
        },
        yAxis: {
            title: {
                text: 'Temperatura (°C) y Humedad (%)'
            }
        },
        series: [
            {
                name: 'Temperatura (°C)',
                data: chartData ? chartData.temperature : []
            },
            {
                name: 'Humedad (%)',
                data: chartData ? chartData.humidity : []
            }
        ]
    };

    const optionseva = {
        title: {
            text: 'Evapotranspiración'
        },
        xAxis: {
            categories: chartDataeva ? chartDataeva.categories : []
        },
        yAxis: {
            title: {
                text: 'Evapotranspiración (mm)'
            }
        },
        series: [
            {
                name: 'Evapotranspiración (mm)',
                data: chartDataeva ? chartDataeva.evapotranspiration : []
            }
        ]
    };

    return (
        <div>
            <h1>Gráfico Meteorológico</h1>
            {chartData ? (
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
            ) : (
                <p>Cargando datos...</p>
            )}
            <br/>
            {chartDataeva ? ( // Solo renderiza si hay datos de evapotranspiración
                <HighchartsReact
                    highcharts={Highcharts}
                    options={optionseva}
                />
            ) : (
                <p>Cargando datos de evapotranspiración...</p>
            )}
        </div>
    );
};

export default Weather;
