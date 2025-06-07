import React, { useRef, useEffect } from 'react';

const Associations = () => {
  const centralLogoRef = useRef(null);
  const associationRefs = useRef({});
  const svgRef = useRef(null);

  const associations = [
    {
      name: "Indian Commissionerate",
      image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068560/as1-new_bjmxhq.png",
      position: { top: "50%", right: "40%" },
    },
    {
      name: "Gujarat Startup",
      image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068560/startupguj_wzfm2b.png",
      position: { top: "60%", left: "25%" },
    },
    {
      name: "Institution's Innovation Council",
      image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068560/as3-new_hfqwad.png",
      position: { top: "20%", left: "40%" },
    },
    {
      name: "SSIP",
      image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068561/as4-new_pufqeo.png",
      position: { top: "60%", right: "10%" },
    },
    {
      name: "GUSEC",
      image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068561/as5-new_aoid2r.png",
      position: { top: "30%", left: "25%" },
    },
    {
      name: "GTU Innovation Council",
      image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068562/as6-new_hgdips.png",
      position: { top: "12%", right: "35%" },
    },
    {
      name: "Savli TBI",
      image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068562/as7-new_gmllru.png",
      position: { top: "55%", left: "15%" },
    },
    {
      name: "GACL",
      image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068563/as8_rcoum6.png",
      position: { top: "70%", left: "5%" },
    },
    {
      name: "GUJCOST",
      image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068563/as9_yjatkd.png",
      position: { top: "40%", left: "10%" },
    },
    {
      name: "GCSR Authority",
      image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068564/as10-new_rfyxw8.png",
      position: { top: "35%", right: "15%" },
    },
    {
      name: "DST Gujarat",
      image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068565/as11-new_yi6opd.png",
      position: { top: "85%", left: "15%" },
    },
    {
      name: "NASSCOM",
      image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068556/as12-new_a0j0zl.png",
      position: { top: "80%", right: "5%" },
    },
    {
      name: "GSBTM",
      image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068557/as13-new_wdzgzz.png",
      position: { top: "25%", left: "5%" },
    },
    {
      name: "GSFC Limited",
      image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068556/as14-new_kkzmhk.png",
      position: { top: "30%", right: "5%" },
    },
    {
      name: "CED Gujarat",
      image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068557/as15-new_dfnkv7.png",
      position: { top: "75%", left: "40%" },
    },
    {
      name: "Innodesk Global",
      image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068557/as16-new_qwbvgg.png",
      position: { top: "78%", right: "25%" },
    },
    {
      name: "TiE Vadodara",
      image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068558/as17-new_c5z1kq.png",
      position: { top: "55%", right: "25%" },
    },
    {
      name: "Marwari Catalysts",
      image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068558/as18-new_nhzvq0.png",
      position: { top: "72%", right: "35%" },
    },
    {
      name: "Vexma Technologies",
      image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068558/as19-new_xry8ie.jpg",
      position: { top: "10%", left: "10%" },
    },
    {
      name: "Garuda Aerospace",
      image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068559/as20-new_vt4qfv.png",
      position: { top: "15%", right: "15%" },
    },
  ];

  useEffect(() => {
    const updateLines = () => {
      const centralLogo = centralLogoRef.current;
      const svg = svgRef.current;
      if (!centralLogo || !svg) return;

      const svgRect = svg.getBoundingClientRect();
      const centralRect = centralLogo.getBoundingClientRect();
      const centralX = centralRect.left + centralRect.width / 2;
      const centralY = centralRect.top + centralRect.height / 2;

      associations.forEach((_, index) => {
        const assocRef = associationRefs.current[`association-${index}`];
        if (!assocRef) return;

        const image = assocRef.querySelector('img');
        if (!image) return;

        const assocRect = image.getBoundingClientRect();
        const assocX = assocRect.left + assocRect.width / 2;
        const assocY = assocRect.top + assocRect.height / 2;

        const line = svg.querySelectorAll('line')[index];
        if (line) {
          line.setAttribute('x1', centralX - svgRect.left);
          line.setAttribute('y1', centralY - svgRect.top);
          line.setAttribute('x2', assocX - svgRect.left);
          line.setAttribute('y2', assocY - svgRect.top);
        }
      });
    };

    updateLines();
    window.addEventListener('resize', updateLines);
    let animationFrame;
    const animate = () => {
      updateLines();
      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', updateLines);
      cancelAnimationFrame(animationFrame);
    };
  }, [associations]);

  return (
    <section className="relative bg-white overflow-hidden section-padding">
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Prestigious Associations</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          GUIITAR COUNCIL collaborates with leading industry partners, government organizations,
          and academic institutions to foster innovation and entrepreneurship.
        </p>
      </div>

      <div className="relative min-h-[600px] md:min-h-[800px] mx-auto max-w-6xl">
        {/* Central Logo */}
        <div
          ref={centralLogoRef}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 bg-black rounded-full flex items-center justify-center shadow-2xl">
            <img
              src="https://res.cloudinary.com/dopcjxehj/image/upload/v1749216952/favicon_u2mdzh.png"
              alt="GUIITAR COUNCIL Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Floating logos */}
        {associations.map((assoc, index) => (
          <div
            key={index}
            ref={(el) => (associationRefs.current[`association-${index}`] = el)}
            className="absolute z-10"
            style={{
              ...assoc.position,
              animation: `float${(index % 8) + 1} 4s ease-in-out infinite`,
            }}
          >
            <div className="absolute group cursor-pointer" style={{ top: 0, left: 0 }}>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-lg border-4 border-white hover:scale-110 hover:shadow-xl transition-all duration-300">
                <img src={assoc.image} alt={assoc.name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  {assoc.name}
                </div>
                <div className="w-2 h-2 bg-gray-800 transform rotate-45 mx-auto -mt-1"></div>
              </div>
            </div>
          </div>
        ))}

        {/* Connection Lines */}
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" ref={svgRef}>
          {associations.map((_, i) => (
            <line
              key={`line-${i}`}
              x1="0"
              y1="0"
              x2="0"
              y2="0"
              stroke="#e5e7eb"
              strokeWidth="3"
              strokeDasharray="5,5"
              opacity="1.0"
            />
          ))}
        </svg>
      </div>

      <style>
        {`
          @keyframes float1 { 0% { transform: translate(0, 0); } 50% { transform: translate(10px, 10px); } 100% { transform: translate(0, 0); } }
          @keyframes float2 { 0% { transform: translate(0, 0); } 50% { transform: translate(-10px, 5px); } 100% { transform: translate(0, 0); } }
          @keyframes float3 { 0% { transform: translate(0, 0); } 50% { transform: translate(5px, -10px); } 100% { transform: translate(0, 0); } }
          @keyframes float4 { 0% { transform: translate(0, 0); } 50% { transform: translate(-5px, -5px); } 100% { transform: translate(0, 0); } }
          @keyframes float5 { 0% { transform: translate(0, 0); } 50% { transform: translate(8px, 3px); } 100% { transform: translate(0, 0); } }
          @keyframes float6 { 0% { transform: translate(0, 0); } 50% { transform: translate(-3px, -8px); } 100% { transform: translate(0, 0); } }
          @keyframes float7 { 0% { transform: translate(0, 0); } 50% { transform: translate(6px, 6px); } 100% { transform: translate(0, 0); } }
          @keyframes float8 { 0% { transform: translate(0, 0); } 50% { transform: translate(-6px, 4px); } 100% { transform: translate(0, 0); } }
        `}
      </style>
    </section>
  );
};

export default Associations;
