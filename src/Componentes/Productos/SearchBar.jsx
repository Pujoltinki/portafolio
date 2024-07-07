import React from 'react';
import { Box, TextField, MenuItem, FormControl, InputLabel, Select, Checkbox, FormControlLabel, Typography, Grid } from '@mui/material';

const SearchBar = ({
  searchText,
  setSearchText,
  sortOption,
  setSortOption,
  selectedBrands,
  handleBrandChange,
  categories,
  selectedCategory,
  handleCategoryChange,
}) => {
  const brands = ["Empresa1", "Empresa5", "Empresa3", "Empresa4", "Empresa2"];

  return (
    <Box sx={{ margin: '1rem 0' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Buscar Productos"
            placeholder="Buscar..."
            variant="outlined"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Ordenar por</InputLabel>
            <Select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              label="Ordenar por"
            >
              <MenuItem value="default">Seleccione</MenuItem>
              <MenuItem value="titleAsc">Nombre (A-Z)</MenuItem>
              <MenuItem value="titleDesc">Nombre (Z-A)</MenuItem>
              <MenuItem value="priceAsc">Precio (menor a mayor)</MenuItem>
              <MenuItem value="priceDesc">Precio (mayor a menor)</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Categoría</InputLabel>
            <Select
              value={selectedCategory}
              onChange={handleCategoryChange}
              label="Categoría"
            >
              <MenuItem value="">Seleccione</MenuItem>
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="h5" sx={{ fontWeight: 'bold' }}>Filtrar por Marca</Typography>
          {brands.map((brand) => (
            <FormControlLabel
              key={brand}
              control={
                <Checkbox
                  checked={selectedBrands.includes(brand)}
                  onChange={handleBrandChange}
                  value={brand}
                />
              }
              label={brand}
            />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchBar;
