"use client";

import React from 'react';
// rechart
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer } from 'recharts';
// ShadcnUI
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// No need for interface -> Typecasting nested arrays since only 4
const data = [
  { axes: 'Relevance', A: 0.9, B: 0.9, C: 0.5, D: 0.7, fullMark: 1 },
  { axes: 'Viability', A: 0.6, B: 0.7, C: 0.5, D: 0.5, fullMark: 1 },
  { axes: 'Customer Value', A: 0.7, B: 0.7, C: 0.4, D: 0.8, fullMark: 1 },
  { axes: 'Competitive Edge', A: 0.8, B: 0.8, C: 0.5, D: 0.8, fullMark: 1 },
];

export default function ComparativeScoreChart() {
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>Comparative Scoring Across 4 Digital Solutions</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="axes" />
            <PolarRadiusAxis angle={30} domain={[0, 1]} />
            <Radar name="ALSADA" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Radar name="Microlearning" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            <Radar name="AI/VR" dataKey="C" stroke="#ffc658" fill="#ffc658" fillOpacity={0.6} />
            <Radar name="AI Tutor" dataKey="D" stroke="#ff7300" fill="#ff7300" fillOpacity={0.6} />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}