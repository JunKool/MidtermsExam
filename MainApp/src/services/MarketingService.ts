// MarketingService.ts
interface UserOfferRelationship {
    userId: string;
    offerIds: string[];
  }
  
  const inMemoryUserOfferRelationships: UserOfferRelationship[] = [];
  
  export const marketingServiceApi = {
    getAllUserOfferRelationships: () => inMemoryUserOfferRelationships,
    searchUserOfferRelationships: (searchTerm: string) =>
      inMemoryUserOfferRelationships.filter((relationship) =>
        relationship.userId.includes(searchTerm)
      ),
    assignUserOffers: (userId: string, offerIds: string[]) => {
      // Check if a relationship already exists for the user
      const existingRelationshipIndex = inMemoryUserOfferRelationships.findIndex(
        (relationship) => relationship.userId === userId
      );
  
      if (existingRelationshipIndex !== -1) {
        // Update the existing relationship
        inMemoryUserOfferRelationships[existingRelationshipIndex].offerIds = offerIds;
      } else {
        // Create a new relationship
        inMemoryUserOfferRelationships.push({ userId, offerIds });
      }
    },
  };
  