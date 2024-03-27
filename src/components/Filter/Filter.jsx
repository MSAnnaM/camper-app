import { useState, useRef } from 'react';
import Select from 'react-dropdown-select';
import { SearchParams } from '../../redux/camperApi';

import {
  FiltersWrap,
  FormFilters,
  LabelFilters,
  LabelLocation,
  RadioBtn,
  CheckBox,
  FieldSet,
  InputWrap,
  ButtonsWrap,
} from './Filter.styled';
import {
  PinIcon,
  Van3Icon,
  Van2Icon,
  ShowerIcon,
  TvIcon,
  KitchenIcon,
  Van1Icon,
  TransmissionIcon,
  ToiletIcon,
} from '../Icons/AllIcons';

const LOCATION = [
  { label: 'Kyiv', value: 'Ukraine, Kyiv' },
  { label: 'Lviv', value: 'Ukraine, Lviv' },
  { label: 'Odesa', value: 'Ukraine, Odesa' },
  { label: 'Poltava', value: 'Ukraine, Poltava' },
  { label: 'Dnipro', value: 'Ukraine, Dnipro' },
  { label: 'Kharkiv', value: 'Ukraine, Kharkiv' },
  { label: 'Sumy', value: 'Ukraine, Sumy' },
];

const EQUIPMENT = [
  {
    name: 'airConditioner',
    value: '1',
    icon: ToiletIcon,
    text: 'AC',
  },
  {
    name: 'transmission',
    value: 'automatic',
    icon: TransmissionIcon,
    text: 'Automatic',
  },
  {
    name: 'kitchen',
    value: '1',
    icon: KitchenIcon,
    text: 'Kitchen',
  },
  {
    name: 'TV',
    value: '1',
    icon: TvIcon,
    text: 'TV',
  },
  {
    name: 'shower',
    value: '1',
    icon: ShowerIcon,
    text: 'Shower/WC',
  },
];

const TYPE = [
  {
    value: 'panelTruck',
    icon: Van1Icon,
    text: 'Van',
  },
  {
    value: 'fullyIntegrated',
    icon: Van2Icon,
    text: 'Fully Integrated',
  },
  {
    value: 'alcove',
    icon: Van3Icon,
    text: 'Alcove',
  },
];

export const Filters = ({ setPage, searchParams, setSearchParams }) => {
  const [filterParams, setFilterParams] = useState({});
  const checkbox = useRef(null);
  const dropdownRef = useRef(null);

  const params = {};
  SearchParams(searchParams, params);

  const handleFilterAdverts = e => {
    e.preventDefault();
    setSearchParams({});
    setPage(1);
    setSearchParams({ ...filterParams });
  };

  const resetFilters = () => {
    [...checkbox.current?.elements].forEach(input => {
      if (input.type === 'checkbox' || input.type === 'radio') {
        input.checked = false;
      }
    });

    dropdownRef.current?.clearAll();
    setSearchParams({});
    setFilterParams({});
  };

  return (
    <FormFilters onSubmit={handleFilterAdverts} ref={checkbox}>
      <LabelLocation>
        Location
        <Select
          ref={dropdownRef}
          placeholder="Location"
          options={LOCATION}
          onChange={arr => {
            if (arr.length > 0) {
              setFilterParams(prev => ({ ...prev, location: arr[0].value }));
            }
          }}
          closeOnScroll={true}
          color="var(--accent-color)"
        />
        <PinIcon width={20} height={20} />
      </LabelLocation>

      <FiltersWrap>
        Filters
        <LabelFilters>
          Vehicle equipment
          <hr />
          <FieldSet>
            {EQUIPMENT.map(({ name, value, icon: Icon, text }, i) => (
              <InputWrap key={`${text}/${i}`}>
                <input
                  type="checkbox"
                  name={name}
                  value={value}
                  onChange={({ target }) => {
                    if (target.checked) {
                      setFilterParams(prev => ({
                        ...prev,
                        [target.name]: target.value,
                      }));
                    } else {
                      setFilterParams(prev => {
                        const { [target.name]: removedParam, ...rest } = prev;
                        return { ...rest };
                      });
                    }
                  }}
                />
                <CheckBox>
                  <Icon width={20} height={20} size={20} /> {text}
                </CheckBox>
              </InputWrap>
            ))}
          </FieldSet>
        </LabelFilters>
        <LabelFilters>
          Vehicle type
          <hr />
          <FieldSet>
            {TYPE.map(({ value, icon: Icon, text }, i) => (
              <InputWrap key={`${text}/${i}`}>
                <input
                  type="radio"
                  name="type"
                  value={value}
                  onChange={({ target }) =>
                    setFilterParams(prev => ({
                      ...prev,
                      form: target.value,
                    }))
                  }
                />
                <RadioBtn>
                  <Icon width={20} height={20} /> {text}
                </RadioBtn>
              </InputWrap>
            ))}
          </FieldSet>
        </LabelFilters>
      </FiltersWrap>

      <ButtonsWrap>
        <button type="submit">Search</button>
        <button
          id="reset-button"
          type="button"
          aria-label="Reset filter fields"
          onClick={resetFilters}
        >
          Reset
        </button>
      </ButtonsWrap>
    </FormFilters>
  );
};
