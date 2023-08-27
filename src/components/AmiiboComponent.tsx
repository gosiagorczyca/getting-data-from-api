import React, { useState } from "react";
import useAmiiboByName from "../hooks/useAmiiboByName";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Divider,
  TextField,
  CircularProgress,
  Stack
} from "@mui/material";
import ErrorBoundary from "./ErrorBoundary";
import ErrorPage from "./ErrorPage";
import debounce from "lodash/debounce";
import { useTranslation } from "react-i18next";

const AmiiboComponent: React.FC = () => {
  const [amiiboName, setAmiiboName] = useState<string>("");
  const [debouncedName, setDebouncedName] = useState<string>("");
  const { data, isLoading, isError } = useAmiiboByName(debouncedName);
  const { t } = useTranslation();

  const debouncedSearch = debounce((value: string) => {
    setDebouncedName(value);
  }, 500);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setAmiiboName(value);
    debouncedSearch(value);
  };

  return (
    <Stack>
      <TextField
        label={t("amiiboNameLabel")}
        variant="outlined"
        value={amiiboName}
        onChange={handleNameChange}
        inputProps={{ "data-testid": "amiibo-name-input" }}
        disabled={isLoading}
      />
      <ErrorBoundary fallback={<ErrorPage />}>
        {isLoading && <CircularProgress data-testid="loading-message" />}
        {isError && <p data-testid="error-message">{t("errorMessage")}</p>}
        <Grid container spacing={3} data-testid="amiibo-grid">
          {data?.map((amiibo) => (
            <Grid item xs={12} sm={6} md={4} key={amiibo.tail}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={amiibo.image}
                  alt={amiibo.name}
                />
                <CardContent>
                  <Typography variant="h6">{amiibo.name}</Typography>
                  <Typography variant="subtitle1">
                    Game Series: {amiibo.gameSeries}
                  </Typography>
                  <Divider />
                  <Typography variant="body1">
                    Amiibo Series: {amiibo.amiiboSeries}
                  </Typography>
                  <Typography variant="body1">
                    Character: {amiibo.character}
                  </Typography>
                  <Typography variant="body1">Head: {amiibo.head}</Typography>
                  <Typography variant="body1">Release:</Typography>
                  <ul>
                    {Object.entries(amiibo.release).map(([key, value]) => (
                      <li key={key}>
                        {key}: {value}
                      </li>
                    ))}
                  </ul>
                  <Typography variant="body1">Type: {amiibo.type}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </ErrorBoundary>
    </Stack>
  );
};

export default AmiiboComponent;
