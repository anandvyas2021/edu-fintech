import { Input, Typography } from "@material-tailwind/react";

export default function InputField({
    label,
    placeholder,
    className,
    required,
    error,
    type = "text",
    maxLength,
    value,
    onChange,
    onBlur,
    name,
}) {
    return (
        <div className={`w-full space-y-1 ${className}`}>
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

            <Input
                id={name || label}
                type={type}
                placeholder={placeholder}
                className="px-4 py-3 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none focus:border-blue-600"
                maxLength={maxLength}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                name={name}
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
}
