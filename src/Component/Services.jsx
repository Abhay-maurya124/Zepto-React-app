import { Truck, ShieldCheck, RotateCw, Headset } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Truck className="h-5 w-5 md:h-6 md:w-6" />,
      title: "Free Shipping",
      description: "On orders over $100",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      icon: <ShieldCheck className="h-5 w-5 md:h-6 md:w-6" />,
      title: "Secure Payment",
      description: "100% Protected Payments",
      bgColor: "bg-green-100",
      textColor: "text-green-600"
    },
    {
      icon: <RotateCw className="h-5 w-5 md:h-6 md:w-6" />,
      title: "Easy Returns",
      description: "30 Day Return Policy",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600"
    },
    {
      icon: <Headset className="h-5 w-5 md:h-6 md:w-6" />,
      title: "24/7 Support",
      description: "Dedicated Customer Service",
      bgColor: "bg-orange-100",
      textColor: "text-orange-600"
    }
  ];

  return (
    <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 lg:gap-6 py-4 md:py-6 lg:py-8 px-3 md:px-4 bg-gray-50'>
      {services.map((service, index) => (
        <div key={index} className="flex flex-col items-center text-center p-3 md:p-4">
          <div className={`p-2 ${service.bgColor} ${service.textColor} rounded-full mb-2 md:mb-3`}>
            {service.icon}
          </div>
          <h4 className="font-medium text-gray-900 text-sm md:text-base">{service.title}</h4>
          <p className="text-gray-600 text-xs md:text-sm mt-1">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;