'use client'

import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function Graph() {
    const [dataType, setDataType] = useState<string>('temperature');
    const data = [
        { id: '0001', temperature: 10, soilMoisture: 30, airHumidity: 70 },
        { id: '0002', temperature: 25, soilMoisture: 45, airHumidity: 65 },
        { id: '0003', temperature: 40, soilMoisture: 60, airHumidity: 80 },
        { id: '0004', temperature: 30, soilMoisture: 35, airHumidity: 75 },
        { id: '0005', temperature: 20, soilMoisture: 50, airHumidity: 60 },
        { id: '0006', temperature: 35, soilMoisture: 55, airHumidity: 85 },
        { id: '0007', temperature: 50, soilMoisture: 40, airHumidity: 90 },
    ];

    const handleDataTypeChange = (type: string) => {
        setDataType(type);
    };

    return (
        <div className="flex flex-row w-full h-full">
            
            <div className='flex-1' >
                <ResponsiveContainer width="100%" height={400}>
                    <AreaChart
                        data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#4caf50" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#4caf50" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="id" label={{ value: 'ID', position: 'right', offset: 20}} />
                        <YAxis 
                            label={{ 
                                value: dataType === 'temperature' ? 'อุณหภูมิ' : dataType === 'soilMoisture' ? 'ความชื้นในดิน' : 'ความชื้นในอากาศ', 
                                angle: -90, 
                                position: 'insideLeft' 
                            }} 
                        />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey={dataType}
                            stroke="#4caf50"
                            fillOpacity={1}
                            fill="url(#color)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <div className='flex flex-col'>
                <Button 
                    onClick={() => handleDataTypeChange('temperature')}
                    className='my-2 bg-gray-100 hover:bg-green-600 hover:text-white'    
                >อุณหภูมิ</Button>
                <Button 
                    onClick={() => handleDataTypeChange('airHumidity')}
                    className='my-2 bg-gray-100 hover:bg-green-600 hover:text-white'
                >ความชื้นในอากาศ</Button>
                <Button 
                    onClick={() => handleDataTypeChange('soilMoisture')}
                    className='my-2 bg-gray-100 hover:bg-green-600 hover:text-white'
                >ความชื้นในดิน</Button>
            </div>
            
        </div>
    );
}

export default Graph;