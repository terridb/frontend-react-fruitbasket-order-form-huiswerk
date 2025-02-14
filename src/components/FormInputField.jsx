import './FormInputField.css'

function FormInputField({isRequired, inputId, inputLabel, inputType, inputName, register, children, inputRows, inputCols}) {
    switch (inputType) {
        case 'select':
            return (
                <>
                    <label htmlFor={inputId}>
                        {inputLabel}
                        <select
                            {...register(inputName)}
                            id={inputId}>
                            {children}
                        </select>
                    </label>
                </>
            )
        case 'radio':
            return (
                <>
                    <label htmlFor={inputId}>
                        <input
                            type={inputType}
                            id={inputId}
                            value={inputId}
                            {...register(inputName)}
                        />
                        {inputLabel}
                    </label>
                </>
            )
        case 'checkbox':
            return (
                <>
                    <label htmlFor={inputId}>
                        <input
                            type={inputType}
                            id={inputId}
                            {...register(inputName)}
                            required={isRequired}
                        />
                        {inputLabel}
                    </label>
                </>
            )
        case 'textarea':
            return (
                <>
                    <label htmlFor={inputId}>
                        {inputLabel}
                        <textarea
                            id={inputId}
                            {...register(inputName)}
                            rows={inputRows}
                            cols={inputCols}
                        />
                    </label>
                </>
            )
        default:
            return (
                <>
                    <label htmlFor={inputId}>
                        {inputLabel}
                    </label>
                    <input
                        type={inputType}
                        id={inputId}
                        {...register(inputName)}
                        required={isRequired}
                    />
                </>
            );
    }
}

export default FormInputField;