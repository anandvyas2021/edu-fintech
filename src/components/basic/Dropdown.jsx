import Select from "react-select";
import { Typography } from "@material-tailwind/react";

export default function Dropdown({
    label,
    value,
    options,
    className,
    onChange,
    required,
    error,
    name,
    onBlur,
}) {
    return (
        <div className={`w-72 space-y-1 ${className}`}>
            <Typography
                as="label"
                htmlFor={name || label}
                type="small"
                color="default"
                className="font-semibold"
            >
                {label}
                {required && <span className="text-red-700">*</span>}
            </Typography>

            <Select
                id={name || label}
                options={options}
                value={options?.find((opt) => opt.value === value) || null}
                onChange={(selectedOption) =>
                    onChange(selectedOption ? selectedOption.value : "")
                }
                onBlur={onBlur}
                name={name}
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
}
