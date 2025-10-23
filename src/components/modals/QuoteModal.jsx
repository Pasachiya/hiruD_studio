import React, { useState } from 'react'
import Modal from 'react-modal'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
import { IoClose } from 'react-icons/io5'
import Button from '../common/Button'
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaDollarSign, FaInfoCircle } from 'react-icons/fa'

// --- EMAILJS CONFIG ---
// !! Replace with your actual EmailJS credentials
const SERVICE_ID = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_QUOTE_TEMPLATE_ID'; // Template for "Request Quote"
const USER_ID = 'YOUR_USER_ID';
// ----------------------

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 1000,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#18181b', // zinc-900
    border: '1px solid #27272a', // zinc-800
    borderRadius: '8px',
    padding: '2.5rem',
    maxWidth: '700px',
    width: '90%',
  },
};

const InputGroup = ({ label, name, register, required, type = 'text', placeholder, error, icon }) => (
  <div className="relative mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
    <div className="absolute inset-y-0 left-0 pl-3 pt-7 flex items-center pointer-events-none">
      {icon}
    </div>
    <input
      type={type}
      id={name}
      placeholder={placeholder}
      {...register(name, { required })}
      className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 pr-3 pl-10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
    />
    {error && <span className="text-red-500 text-xs mt-1">{label} is required</span>}
  </div>
);

const SelectGroup = ({ label, name, register, required, error, icon, children }) => (
   <div className="relative mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
    <div className="absolute inset-y-0 left-0 pl-3 pt-7 flex items-center pointer-events-none">
      {icon}
    </div>
    <select
      id={name}
      {...register(name, { required })}
      className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 pr-3 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow appearance-none"
    >
      {children}
    </select>
    {error && <span className="text-red-500 text-xs mt-1">{label} is required</span>}
  </div>
)

const QuoteModal = ({ isOpen, onRequestClose }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID)
      .then((response) => {
        setSubmitStatus('success');
        setIsSubmitting(false);
        reset();
        setTimeout(onRequestClose, 2000);
      }, (err) => {
        setSubmitStatus('error');
        setIsSubmitting(false);
      });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={modalStyles}
      contentLabel="Request a Quote Modal"
      closeTimeoutMS={300}
    >
      <button onClick={onRequestClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
        <IoClose size={24} />
      </button>
      
      <div className="text-center mb-6">
        <span className="inline-block p-4 bg-brand-yellow rounded-full text-black">
          <FaInfoCircle size={32} />
        </span>
        <h2 className="text-3xl font-bold text-white mt-4">Request a Quote</h2>
        <p className="text-gray-400">Tell us about your project</p>
      </div>

      {submitStatus === 'success' ? (
        <div className="text-center text-green-400 py-10">
          <h3 className="text-2xl font-semibold">Thank You!</h3>
          <p>Your quote request has been sent. We'll be in touch soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            <InputGroup label="Full Name" name="fullName" placeholder="John Doe" register={register} required error={errors.fullName} icon={<FaUser className="text-gray-400"/>} />
            <InputGroup label="Email Address" name="email" placeholder="john@example.com" type="email" register={register} required error={errors.email} icon={<FaEnvelope className="text-gray-400"/>} />
            <InputGroup label="Phone Number" name="phone" placeholder="+1 (555) 123-4567" type="tel" register={register} required error={errors.phone} icon={<FaPhone className="text-gray-400"/>} />
            
            <SelectGroup label="Service Type" name="serviceType" register={register} required error={errors.serviceType} icon={<FaInfoCircle className="text-gray-400"/>}>
              <option value="">Select a service</option>
              <option value="Wedding Photography">Wedding Photography</option>
              <option value="Event Coverage">Event Coverage</option>
              <option value="Studio Portraits">Studio Portraits</option>
              <option value="Commercial Shoots">Commercial Shoots</option>
              <option value="Drone Cinematography">Drone Cinematography</option>
            </SelectGroup>
            
            <InputGroup label="Event Date" name="eventDate" type="text" placeholder="mm/dd/yyyy" register={register} required error={errors.eventDate} icon={<FaCalendarAlt className="text-gray-400"/>} />
            <InputGroup label="Location" name="location" placeholder="City, State" register={register} required error={errors.location} icon={<FaMapMarkerAlt className="text-gray-400"/>} />
          </div>

          <SelectGroup label="Budget Range" name="budget" register={register} required error={errors.budget} icon={<FaDollarSign className="text-gray-400"/>}>
            <option value="">Select budget range</option>
            <option value="< Rs. 10,000">&lt; Rs. 10,000</option>
            <option value="Rs. 10,000 - 25,000">Rs. 10,000 - 25,000</option>
            <option value="Rs. 25,000 - 50,000">Rs. 25,000 - 50,000</option>
            <option value="> Rs. 50,000">&gt; Rs. 50,000</option>
          </SelectGroup>

          <div className="mb-6">
            <label htmlFor="details" className="block text-sm font-medium text-gray-300 mb-1">Additional Details</label>
            <textarea
              id="details"
              rows="4"
              placeholder="Tell us about your project, special requirements, or any questions..."
              {...register('details')}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
            ></textarea>
          </div>

          {submitStatus === 'error' && (
            <p className="text-red-500 text-center mb-4">Failed to send request. Please try again.</p>
          )}

          <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Submit Quote Request'}
          </Button>
        </form>
      )}
    </Modal>
  )
}

export default QuoteModal