import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: 'button' | 'submit'

}


export interface searchEventTypeProps {
    eventType: string;
    setEventType: (event: string) => void;
}

export interface VehicleProps {
    name: string;
    num_reviews: number;
    rating: number;
    price: number;
    capacity: number;
    img: string
}

export interface OptionProps {
    title: string;
    value: string
}


export interface CustomFilterProps {
    title: string;
    options: OptionProps[]
}

export interface DateFilterProps {
    selectedDate: Date | null;
    onChange: (date: Date | null) => void;
    selectedDateColor?: string;
}
