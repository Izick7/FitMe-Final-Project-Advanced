
import HeroSection from "./HeroSection";
import NearbyRestaurants from "./NearbyRestaurants";
import RecommendedFoodItems from "./RecommendedFoodItems";
import SearchByRestaurant from "./SearchByRestaurant";
import FoodRecommendations from "./FoodRecommendations";

function HomePage() {
    return (
        <>
            <HeroSection />
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <NearbyRestaurants />
                <RecommendedFoodItems />
            </div>
            <SearchByRestaurant />
            <FoodRecommendations />
        </>
    );
}

export default HomePage;