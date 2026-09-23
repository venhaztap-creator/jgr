import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/home/HeroSection';
import QuickPartFinder from '@/components/home/QuickPartFinder';
import SystemNavigation from '@/components/home/SystemNavigation';

import FilterSection from '@/components/home/FilterSection';
import NewArrivals from '@/components/home/NewArrivals';
import HighRotationProducts from '@/components/home/HighRotationProducts';
import CorporateBenefits from '@/components/home/CorporateBenefits';
import StoreLocations from '@/components/home/StoreLocations';
import ValueProps from '@/components/home/ValueProps';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      
      <HeroSection />
      
      {/* Advance Auto Parts style yellow bar for vehicle selection */}
      <QuickPartFinder />

      {/* Navigation by Automotive Systems and Brands */}
      <SystemNavigation />

      {/* Catalog Filter Section matching the user's reference */}
      <FilterSection />

      {/* New Arrivals Section */}
      <NewArrivals />

      {/* High Rotation / Preventive Maintenance Products */}
      <HighRotationProducts />

      {/* Corporate Benefits for Workshops and Fleets */}
      <CorporateBenefits />

      {/* Branch Locations and Dispatch */}
      <StoreLocations />

      {/* Value Props */}
      <ValueProps />

      {/* Footer */}
      <Footer />
    </main>
  );
}
