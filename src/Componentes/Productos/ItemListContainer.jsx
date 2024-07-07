import React, { useEffect, useState } from 'react';
import { pedirDatos } from '../../Helpers/pedirDatos';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import SearchBar from './SearchBar';
import { Box, Typography, Pagination } from '@mui/material';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [filteredProductos, setFilteredProductos] = useState([]);
  const [titulo, setTitulo] = useState('Productos');
  const [searchText, setSearchText] = useState('');
  const [sortOption, setSortOption] = useState('default');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);

  const itemsPerPage = 12;

  const { categoria } = useParams();

  useEffect(() => {
    pedirDatos().then((res) => {
      let productosFiltrados = res;
      const allCategories = [...new Set(res.map((prod) => prod.categoria))];
      setCategories(allCategories);
      if (categoria) {
        productosFiltrados = res.filter((prod) => prod.categoria === categoria);
        setTitulo(categoria);
        setSelectedCategory(categoria);
      } else {
        setTitulo('Productos');
        setSelectedCategory('');
      }
      setProductos(productosFiltrados);
      setFilteredProductos(productosFiltrados);
    });
  }, [categoria]);

  useEffect(() => {
    let filteredData = productos.filter((item) =>
      item.titulo.toLowerCase().includes(searchText.toLowerCase().trim()) ||
      item.descripcion.toLowerCase().includes(searchText.toLowerCase().trim())
    );

    if (sortOption === 'titleAsc') {
      filteredData.sort((a, b) => a.titulo.localeCompare(b.titulo));
    } else if (sortOption === 'titleDesc') {
      filteredData.sort((a, b) => b.titulo.localeCompare(a.titulo));
    } else if (sortOption === 'priceAsc') {
      filteredData.sort((a, b) => a.precio - b.precio);
    } else if (sortOption === 'priceDesc') {
      filteredData.sort((a, b) => b.precio - a.precio);
    }

    if (selectedCategory) {
      filteredData = filteredData.filter((item) => item.categoria === selectedCategory);
    }

    if (selectedBrands.length > 0) {
      filteredData = filteredData.filter((item) => selectedBrands.includes(item.marca));
    }

    setFilteredProductos(filteredData);
    setPage(1); // Reiniciar a la primera página cuando se filtran los productos
  }, [searchText, sortOption, productos, selectedCategory, selectedBrands]);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
  };

  const handleBrandChange = (e) => {
    const brand = e.target.value;
    setSelectedBrands((prevSelectedBrands) =>
      prevSelectedBrands.includes(brand)
        ? prevSelectedBrands.filter((b) => b !== brand)
        : [...prevSelectedBrands, brand]
    );
  };

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const paginatedProductos = filteredProductos.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Box>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        sortOption={sortOption}
        setSortOption={setSortOption}
        selectedBrands={selectedBrands}
        handleBrandChange={handleBrandChange}
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />
      <Typography variant="h4" component="h4" sx={{ fontWeight: 'bold', marginTop: '1rem' }}>
        {titulo}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        <ItemList productos={paginatedProductos} />
      </Box>
      {filteredProductos.length > itemsPerPage && (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          <Pagination
            count={Math.ceil(filteredProductos.length / itemsPerPage)}
            page={page}
            onChange={handleChangePage}
            variant="outlined"
            color="primary"
          />
        </Box>
      )}
    </Box>
  );
};

export default ItemListContainer;
