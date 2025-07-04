import { Select, Typography } from "@material-tailwind/react";

export default function Dropdown({
    label,
    options,
    className,
    required,
    error,
    ...rest
}) {
    return (
        <div className={`w-72 space-y-1 ${className}`}>
            <Typography
                as="label"
                htmlFor={label}
                type="small"
                color="default"
                className="font-semibold"
            >
                {label}
                {required && <span className="text-red-700">*</span>}
            </Typography>
            <Select {...rest}>
                <Select.Trigger placeholder={label} />
                <Select.List>
                    {options?.map((option) => (
                        <Select.Option value={option?.value}>
                            {option?.label}
                        </Select.Option>
                    ))}
                </Select.List>
            </Select>
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
}
