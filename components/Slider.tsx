'use client'
import React, { useState } from "react";
import {Slider} from "@nextui-org/react";

export default function SliderElement({
  value,
  setValue
}:{
  value: any,
  setValue: any
}) {

    // const labelStyle = (children) => {
    //     return (
    //         <>
    //             <div>{children}</div>
    //         </>
    //     )
    // }
    return (
     <>
     <Slider 
        label="Your Surfing Experience"
        step={1} 
        maxValue={10} 
        minValue={0} 
        defaultValue={value}
        marks={[
          {
            value: 0,
            label: '0',
          },
          {
            value: 1,
            label: '1',
          },
          {
            value: 2,
            label: "2",
          },
          {
            value: 3,
            label: "3",
          },
          {
              value: 4,
              label: "4",
          },
          {
              value: 5,
              label: "5",
          },
          {
              value: 6,
              label: "6",
          },
          {
              value: 7,
              label: "7",
          },
          {
              value: 8,
              label: "8",
          },
          {
              value: 9,
              label: "9",
          },
          {
              value: 10,
              label: "10+",
          },
        ]}
        showSteps={true}
        showTooltip={true}
        showOutline={true}
        disableThumbScale={true}
        onChangeEnd={setValue}
      //   formatOptions={{style: "currency", currency: "USD"}}
      //   tooltipValueFormatOptions={{style: "currency", currency: "USD", maximumFractionDigits: 0}}
        classNames={{
          base: "w-full",
          filler: "bg-gradient-to-r from-primary-500 to-secondary-400",
          labelWrapper: "mb-2",
          label: "font-medium text-default-700 text-medium",
          value: "font-medium text-default-500 text-small",
          thumb: [
            "transition-size",
            "bg-gradient-to-r from-secondary-400 to-primary-500",
            "data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20",
            "data-[dragging=true]:w-7 data-[dragging=true]:h-7 data-[dragging=true]:after:h-6 data-[dragging=true]:after:w-6"
          ],
          step: "data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50"
        }}
        tooltipProps={{
          offset: 10,
          placement: "bottom",
          classNames: {
            base: [
              // arrow color
              "before:bg-gradient-to-r before:from-secondary-400 before:to-primary-500",
            ],
            content: [
              "py-2 shadow-xl",
              "text-white bg-gradient-to-r from-secondary-400 to-primary-500",
            ],
          },
        }}
      />
     </>
    );
}
