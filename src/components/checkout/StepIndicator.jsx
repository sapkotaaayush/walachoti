export default function StepIndicator({ steps, current }) {
  return (
    <div className="flex justify-center mb-12">
      <div className="flex items-center space-x-4">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${idx <= current ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
              {idx + 1}
            </div>
            {idx < steps.length - 1 && <div className={`w-8 h-1 ${idx < current ? 'bg-primary' : 'bg-gray-200'}`} />}
          </div>
        ))}
      </div>
      <div className="ml-4">
        <h3 className="font-semibold">{steps[current]}</h3>
      </div>
    </div>
  )
}