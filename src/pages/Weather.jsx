import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';

const Weather = () => {
    const [chartData, setChartData] = useState(null);    
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const formatDate = (date) => {
        const pad = (number) => (number < 10 ? `0${number}` : number);

        const year = date.getFullYear();
        const month = pad(date.getMonth() + 1); // Los meses en JS van de 0 a 11
        const day = pad(date.getDate());
        const hours = pad(date.getHours());
        const minutes = pad(date.getMinutes());
        const seconds = pad(date.getSeconds());

        // Obtener el offset de la zona horaria en ±HH:MM
        const timezoneOffset = -date.getTimezoneOffset(); // En minutos
        const offsetSign = timezoneOffset >= 0 ? '+' : '-';
        const offsetHours = pad(Math.floor(Math.abs(timezoneOffset) / 60));
        const offsetMinutes = pad(Math.abs(timezoneOffset) % 60);

        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.000${offsetSign}${offsetHours}:${offsetMinutes}`;
    };
    // 2. Función para solicitar la ubicación del usuario
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
                    // Opcional: Guardar en localStorage para persistencia
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

            // Obtener la fecha y hora actuales
            const endDate = new Date();

            // Calcular la fecha y hora de hace dos semanas
            const startDate = new Date();
            startDate.setDate(endDate.getDate() - 14); // Restar 14 días para dos semanas

            // Formatear las fechas
            const formattedStartDate = formatDate(startDate);
            const formattedEndDate = formatDate(endDate);

            // Construir la URL dinámicamente
            const url = `https://api.meteomatics.com/${formattedStartDate}--${formattedEndDate}:P1D/t_2m:C,relative_humidity_2m:p/${lat},${lon}/csv`;

            // Haciendo la solicitud con autenticación básica
            const response = await axios.get(url, {
                headers: {
                    'Authorization': 'Basic ' + btoa(`${username}:${password}`)
                }
            });

            // Procesar los datos del CSV
            const data = response.data;
            const parsedData = parseCSVData(data);
            setChartData(parsedData);
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setError('Error al obtener los datos meteorológicos.');
        }
    };
    

    // 4. Función para parsear los datos CSV
    const parseCSVData = (csv) => {
        const lines = csv.split('\n');
        const categories = [];
        const temperature = [];
        const humidity = [];
        
        // Recorrer las líneas del CSV y extraer datos
        for (let i = 1; i < lines.length; i++) { // Empieza desde 1 para saltar el encabezado
            const [date, temp, hum] = lines[i].split(';');
            if (date && temp && hum) {
                categories.push(new Date(date).toLocaleString()); // Formatear la fecha
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

    // 5. useEffect para cargar la ubicación desde localStorage al montar el componente
    useEffect(() => {
        const savedLocation = JSON.parse(localStorage.getItem('userLocation'));
        if (savedLocation && savedLocation.latitude && savedLocation.longitude) {
            setLocation(savedLocation);
        }
    }, []);

    // 6. useEffect para obtener datos meteorológicos cuando cambia la ubicación
    useEffect(() => {
        if (location.latitude && location.longitude) {
            fetchWeatherData(location.latitude, location.longitude);
        }
    }, [location]);

    // 7. Configuración de las opciones de Highcharts
    const options = {
        title: {
            text: 'Datos Meteorológicos'
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
        </div>
    );
};

export default Weather;

