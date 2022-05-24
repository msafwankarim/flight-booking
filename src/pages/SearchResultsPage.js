import { Container } from "@mui/material";
import SearchFlightForm from "../components/SearchFlightForm";
import SearchResults from "../components/SearchResults";

const SearchResultsPage = () => {
  console.log("Re render");

  return (
    <Container className="searchResults" maxWidth="xl">
      <SearchFlightForm isSearchPage />
      <SearchResults />
    </Container>
  );
};

export default SearchResultsPage;
