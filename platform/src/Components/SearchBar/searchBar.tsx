import React, { useState, useEffect, useRef } from 'react';
import { components, SelectInstance } from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { baseTheme } from '@Themes';
import { useGetMaterialsQuery } from '@Store';
import { useNavigate } from 'react-router-dom';
import { Material } from 'src/Models';
import { SelectStyled } from './searchBar.styles';

const Placeholder = (props) => {
  return <components.Placeholder {...props} />;
};

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <FontAwesomeIcon icon={faSearch as IconDefinition} size="lg" />
    </components.DropdownIndicator>
  );
};

const SearchBar = ({ defaultValue, onSearchResult }) => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<Material>();

  const selectRef = useRef<SelectInstance<any> | null>(null);

  const onChange = (selected) => {
    const value = selected ? selected.value : null;
    if (value) {
      navigate(`/network/?m=${value}`);
    }
    setSelectedProduct(selected);
    onSearchResult(value);
  };

  const { data: materials, error, isLoading, isFetching } = useGetMaterialsQuery(undefined);
  if (error) console.log('useGetMaterialsQuery ~ error', error);

  const options = materials
    ? [
        {
          label: 'Products',
          options: Object.values(materials).map((material) => ({
            value: material.id,
            label: `${material.name} (${material.type})`,
          })),
        },
      ]
    : [];

  const defaultValue1 = defaultValue ? { value: defaultValue, label: defaultValue } : null;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        if (selectRef.current) {
          selectRef.current.focus();
          if (selectRef.current && typeof selectRef.current.onMenuOpen === 'function') {
            selectRef.current.onMenuOpen();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <SelectStyled
      ref={selectRef as any}
      theme={(theme) => ({
        ...theme,
        colors: { ...theme.colors, primary: baseTheme.colors.bopsPurple2, primary25: baseTheme.colors.bopsPurple3 },
      })}
      defaultValue={defaultValue1}
      components={{ Placeholder, DropdownIndicator }}
      isSearchable
      isClearable
      menuPortalTarget={document.body}
      styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
      options={options}
      name="MovementsSearch"
      placeholder="Search for products..."
      onChange={(selected) => onChange(selected)}
      onMenuOpen={() => {}}
    />
  );
};

export default SearchBar;
