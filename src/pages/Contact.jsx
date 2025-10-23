import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
import Button from '../components/common/Button'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa'

// --- EMAILJS CONFIG ---
// !! Replace with your actual EmailJS credentials
const SERVICE_ID = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_CONTACT_TEMPLATE_ID'; // Template for "Contact Form"
const USER_ID = 'YOUR_USER_ID';
// ----------------------

const Input = ({ label, name, register, required, type = 'text', error }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
    <input
      type={type}
      id={name}
      {...register(name, { required })}
      className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
    />
    {error && <span className="text-red-500 text-xs mt-1">{label} is required</span>}
  </div>
);

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const onSubmit = (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID)
      .then((response) => {
        setSubmitStatus('success');
        setIsSubmitting(false);
        reset();
      }, (err) => {
        setSubmitStatus('error');
        setIsSubmitting(false);
      });
  };

  return (
    <div className="bg-zinc-900 p-8 rounded-lg">
      <h3 className="text-3xl font-bold text-white mb-6">Send Us a Message</h3>
      {submitStatus === 'success' ? (
        <div className="text-center text-green-400 py-10">
          <h3 className="text-xl font-semibold">Message Sent!</h3>
          <p>Thank you for reaching out. We'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input label="Name" name="name" register={register} required error={errors.name} />
          <Input label="Email" name="email" type="email" register={register} required error={errors.email} />
          <Input label="Phone" name="phone" type="tel" register={register} required error={errors.phone} />
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
            <textarea
              id="message"
              rows="5"
              {...register('message', { required: true })}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
            ></textarea>
            {errors.message && <span className="text-red-500 text-xs mt-1">Message is required</span>}
          </div>

          {submitStatus === 'error' && (
            <p className="text-red-500 text-center mb-4">Failed to send message. Please try again.</p>
          )}

          <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      )}
    </div>
  )
}

const ContactInfo = () => (
  <div>
    <h3 className="text-3xl font-bold text-white mb-6">Contact Information</h3>
    <div className="space-y-4">
      <div className="flex items-start">
        <FaMapMarkerAlt className="text-brand-yellow mt-1 mr-4 flex-shrink-0" size={20} />
        <div>
          <h4 className="text-lg font-semibold text-white">Address</h4>
          <p className="text-gray-400">123 Studio Street, Colombo 07, Sri Lanka</p>
        </div>
      </div>
      <div className="flex items-start">
        <FaPhone className="text-brand-yellow mt-1 mr-4 flex-shrink-0" size={20} />
        <div>
          <h4 className="text-lg font-semibold text-white">Phone</h4>
          <p className="text-gray-400">+94 77 123 4567</p>
        </div>
      </div>
      <div className="flex items-start">
        <FaEnvelope className="text-brand-yellow mt-1 mr-4 flex-shrink-0" size={20} />
        <div>
          <h4 className="text-lg font-semibold text-white">Email</h4>
          <p className="text-gray-400">hello@hirudstudio.com</p>
        </div>
      </div>
    </div>

    <h3 className="text-3xl font-bold text-white mb-6 mt-12">Follow Us</h3>
    <div className="flex space-x-6">
      <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors"><FaInstagram size={28} /></a>
      <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors"><FaFacebook size={28} /></a>
      <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors"><FaYoutube size={28} /></a>
    </div>
  </div>
);

const Contact = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="py-40 bg-contact-bg bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="container mx-auto max-w-7xl px-4 text-center relative z-10">
          <h1 className="text-6xl font-bold text-white">
            Get in <span className="text-brand-yellow">Touch</span>
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-zinc-900 flex items-center justify-center text-center">
        <div className="text-gray-500">
          <FaMapMarkerAlt size={40} className="mx-auto mb-4" />
          <h3 className="text-2xl">Google Map Placeholder</h3>
          <p>This is where the studio map would be embedded.</p>
        </div>
      </section>
    </div>
  )
}

export default Contact