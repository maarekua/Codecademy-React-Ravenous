const apiKey = 'NvoBKfBj29xwiSfnhtZMXxXP6yJQlIbKhwC_rFRgb_oBc7AWnKP0lvMqE_7Wu0dBTI7Aq6RpfDLTOw-2C0AC37zPzJjZBL9cau-VfiFCzT_lWzy-bQVzLN6QgL95XnYx';

export const Yelp = {
    async search(term, location, sortBy){
        const res = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: { Authorization: `Bearer ${apiKey}` }
        });
        const jsonResponse = await res.json();
        if (!jsonResponse.businesses) {
            return []
        }
        return jsonResponse.businesses.map(business => (
            {
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.review_count
             }
        ));
    }
};