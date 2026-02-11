import homePageCover from '../../../assets/images/home-page-cover.png';
import logo from '../../../assets/images/logo.png';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-end justify-center overflow-hidden">
      {/* Background Image with Grayscale Filter */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${homePageCover})`,
          filter: 'grayscale(100%)',
        }}
      />
      
      {/* Layered Arched Overlay */}
      <div 
        className="flex justify-center md:px-8 px-4 relative z-10"
        style={{
          height: '83%',
          width: '45%',
        }}
      >
        {/* Outer Layer - Border with rounded top */}
        <div 
          style={{
            borderRadius: '50% 50% 0 0',
            borderColor: 'rgba(85, 109, 112, 0.4)',
            borderWidth: '16px',
            width: '100%',
          }}
        >
          {/* Middle Layer - Golden Border */}
          <div 
            className="border-[4px]"
            style={{
              borderRadius: '60% 60% 0 0',
              height: '100%',
              borderColor: "rgba(249, 213, 122, 0.4)",
            }}
          >
            {/* Inner Layer - Green Cyan with Content */}
            <div 
              className="flex flex-col items-center px-8 py-0"
              style={{
                borderRadius: '60% 60% 0 0',
                height: '100%',
                backgroundColor: "rgba(175, 196, 192, 0.4)",
              }}
            >
              {/* Logo */}
              <div className="mt-[120px]">
                <img 
                  src={logo} 
                  alt="Wellington Jade Studio Logo" 
                  className="object-contain"
                  style={{
                    width: '200px',
                    height: '200px',
                    marginTop: '120px',
                  }}
                />
              </div>
              
              {/* Tagline */}
              <div className="text-white text-center text-lg md:text-xl font-carla uppercase tracking-wide">
                <p 
                  className="leading-none mt-5"
                  style={{
                    color: '#FFF',
                    textAlign: 'center',
                    fontFamily: '"PP Hatton"',
                    fontSize: '28px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '100%',
                    letterSpacing: '-0.84px',
                  }}
                >
                  Crafting exquisite wedding photography
                </p>
                <span className="text-3xl md:text-4xl text-[#F9D57A] block mt-2 font-radicalis leading-none">&</span>
                <p className="mt-2 leading-none">films that become timeless keepsakes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;