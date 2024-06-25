import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const financialMetrics = [
  { metric: "Revenue", value: "$1,000,000" },
  { metric: "Profit", value: "$200,000" },
  { metric: "Expenses", value: "$800,000" },
  { metric: "Growth Rate", value: "5%" },
];

function Index() {
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Financial Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Metric</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {financialMetrics.map((metric, index) => (
                <TableRow key={index}>
                  <TableCell>{metric.metric}</TableCell>
                  <TableCell>{metric.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export default Index;