import React, { useState } from 'react'
import Modal from 'react-modal'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
import { IoClose } from 'react-icons/io5'
import Button from '../common/Button'

// --- EMAILJS CONFIG ---
// !! Replace with your actual EmailJS credentials
const SERVICE_ID = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_BOOKING_TEMPLATE_ID'; // Template for "Book Now"
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
    padding: '2rem',
    maxWidth: '500px',
    width: '90%',
  },
};

const Input = ({ label, name, register, required, type = 'text', placeholder, error }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
    <input
      type={type}
      id={name}
      placeholder={placeholder}
      {...register(name, { required })}
      className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
    />
    {error && <span className="text-red-500 text-xs mt-1">{label} is required</span>}
  </div>
);

const BookNowModal = ({ isOpen, onRequestClose }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const onSubmit = (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitStatus('success');
        setIsSubmitting(false);
        reset();
        setTimeout(onRequestClose, 2000); // Close modal after 2s
      }, (err) => {
        console.log('FAILED...', err);
        setSubmitStatus('error');
        setIsSubmitting(false);
      });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={modalStyles}
      contentLabel="Book Now Modal"
      closeTimeoutMS={300}
    >
      <button onClick={onRequestClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
        <IoClose size={24} />
      </button>
      
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Book Now</h2>

      {submitStatus === 'success' ? (
        <div className="text-center text-green-400">
          <h3 className="text-xl font-semibold">Thank You!</h3>
          <p>Your request has been submitted successfully.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input label="Name" name="name" register={register} required error={errors.name} />
          <Input label="Email" name="email" type="email" register={register} required error={errors.email} />
          <Input label="Phone" name="phone" type="tel" register={register} required error={errors.phone} />
          
          <div className="mb-4">
            <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">Service</label>
            <select
              id="service"
              {...register('service', { required: true })}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow"
            >
              <option value="">Select a service</option>
              <option value="Wedding Photography">Wedding Photography</option>
              <option value="Event Coverage">Event Coverage</option>
              <option value="Studio Portraits">Studio Portraits</option>
              <option value="Commercial Shoots">Commercial Shoots</option>
              <option value="Drone Cinematography">Drone Cinematography</option>
            </select>
            {errors.service && <span className="text-red-500 text-xs mt-1">Service is required</span>}
          </div>

          <Input label="Preferred Date" name="date" type="text" placeholder="mm/dd/yyyy" register={register} required error={errors.date} />

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Tell us about your project..."
              {...register('message')}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
            ></textarea>
          </div>

          {submitStatus === 'error' && (
            <p className="text-red-500 text-center mb-4">Failed to send message. Please try again.</p>
          )}

          <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </Button>
        </form>
      )}
    </Modal>
  )
}

export default BookNowModal