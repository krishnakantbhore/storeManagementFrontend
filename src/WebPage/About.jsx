import React from 'react';

const team = [
  {
    name: 'Your Name',
    role: 'Lead Developer & Co-Founder',
    bio: 'Passionate about solving real-world problems through scalable software. Spearheaded the development of the store management system.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Tanmay Tidke',
    role: 'Project Strategist & Co-Founder',
    bio: 'Handles the strategic planning and ensures the system aligns with real business needs. Focused on product vision and user experience.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function AboutUs() {
  return (
    <div class="main-content d-flex justify-content-center align-items-center mb-5 ">
    <section class="section">
      <div class="section-body">
        
      <div className="min-h-screen bg-gray-50 text-gray-800 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
        <p className="text-lg text-center mb-12">
          We are a passionate team building modern solutions for store management. Our mission is to simplify and automate business operations.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {team.map((member) => (
            <div key={member.name} className="bg-white p-6 rounded-2xl shadow-md text-center">
              <h1 className='text-dark'>{member.name}</h1>
              <img 
                src={member.imageUrl}
                alt={member.name}
                className="w-32 h-12 img-fluid mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-blue-600">{member.role}</p>
              <p className="mt-2 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center mb-5">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-lg max-w-2xl mx-auto">
            To become the go-to platform for small and medium businesses looking to streamline their operations with intuitive digital tools.
          </p>
        </div>
      </div>
    </div>

      </div>
      </section>
      </div>

   
    
  );
}