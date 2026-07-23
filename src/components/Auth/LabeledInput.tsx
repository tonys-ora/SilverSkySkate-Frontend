import { memo } from 'react'

const LabeledInput = memo(
  ({ label, ...inputProps }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
      <div>
        <label htmlFor={inputProps.id} className='block text-sm/6 font-medium text-gray-900'>
          {label}
        </label>
        <div className='mt-2'>
          <input
            id={inputProps.id}
            name={inputProps.name}
            type={inputProps.type}
            required
            value={inputProps.value}
            className='bg-gray-200 block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
            onChange={inputProps.onChange}
          />
        </div>
      </div>
    )
  }
)

export default LabeledInput
