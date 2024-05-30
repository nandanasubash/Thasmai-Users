import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

 

 
const chartConfig = {
  type: "pie",
  width: 210,
  height: 210,
  series: [19, 55, 26],
  options: {
    chart: {
     
    },
   
    dataLabels: {
      enabled: true,
    },
    colors: ["#58C2D9", "#597EDD", "#26CC7C"],
    legend: {
      show: false,
    
    },
  },
};
 
export default function Piechart() {
  return (
    <Card className="w-[47%] h-[13rem] shadow-none flex justify-center">
   
       
    
      <CardBody className="mt-4 grid place-items-center px-2 flex justify-center items-center">
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
  );
}