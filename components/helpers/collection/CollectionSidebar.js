import { useState, useEffect } from "react";
import {
  Accordion,
  Icon,
  Grid,
  Header,
  List,
  Checkbox,
} from "semantic-ui-react";
import { connect } from "react-redux";
import { filterCollection } from "./CollectionActions";

const CollectionSidebar = ({ collection, minMaxPrices, filterCollection }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const { categories, priceFilter, colors, sizeOptions } = collection;

  console.log("minMaxPrices.minPrice", minMaxPrices.minPrice);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };

  const handleCategoryChanged = (item, data) => {
    console.log("item", item);
    item.checked = data.checked;
    console.log("item after check", item);
    filterCollection(collection);
  };

  const handlePriceRangeChanged = (minPrice) => {
    const priceRange = { minPrice, maxPrice: minMaxPrices.maxPrice };
    console.log("range", priceRange);
    collection.priceFilter.priceRange = priceRange;
    console.log("collection", collection);
    filterCollection(collection);
  };

  return (
    <Grid stackable>
      <Grid>
        <Grid.Row style={{ paddingBottom: "0" }}>
          <Grid.Column>
            <Header as="h4" content={categories.title} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <hr />
            <Accordion>
              {categories.category.map((category) => (
                <>
                  <Accordion.Title
                    active={activeIndex === category.index}
                    index={category.index}
                    onClick={handleClick}
                  >
                    <Icon name="dropdown" />
                    <span style={{ fontWeight: "bold" }}>{category.name}</span>
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === category.index}>
                    <List>
                      {category.items.map((item) => (
                        <List.Item
                          key={item.name}
                          style={{
                            marginLeft: "1.5rem",
                            marginBottom: ".5rem",
                          }}
                        >
                          <Checkbox
                            label={item.name}
                            onChange={(event, data) =>
                              handleCategoryChanged(item, data)
                            }
                          />
                        </List.Item>
                      ))}
                    </List>
                  </Accordion.Content>
                </>
              ))}
            </Accordion>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid>
        <Grid.Row>
          <Grid.Column>
            <hr />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Header as="h4" content={priceFilter.title} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ paddingBottom: "0" }}>
          <Grid.Column>
            <input
              name="priceRange"
              type="range"
              style={{
                color: "primary",
                WebkitAppearance: "none",
                appearance: "none",
                width: "100%",
                height: "1rem",
                background: "#d3d3d3",
                outline: "none",
                opacity: "0.7",
                WebkitTransition: ".2s",
                transition: "opacity .2s",
              }}
              min={minMaxPrices.minPrice}
              max={minMaxPrices.maxPrice}
              onChange={() => {
                handlePriceRangeChanged(event.target.value);
              }}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row
          columns="2"
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "0",
          }}
        >
          <Grid.Column>${minMaxPrices.minPrice}</Grid.Column>
          <Grid.Column style={{ textAlign: "right" }}>
            ${minMaxPrices.maxPrice}
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid>
        <Grid.Row>
          <Grid.Column>
            <hr />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Header as="h4" content={colors.title} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row
          columns={colors.colors.length}
          style={{
            display: "flex",
            justifyContent: "space-around",
            paddingTop: "0",
          }}
        >
          {colors.colors.map((color) => (
            <Grid.Column
              width="2"
              key={color}
              style={{
                border: "1px solid #b7b7b7",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Icon name="square" size="large" color={color} style={{}} />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>

      <Grid>
        <Grid.Row>
          <Grid.Column>
            <hr />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Header as="h4" content={sizeOptions.title} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row
          columns={colors.colors.length}
          style={{
            display: "flex",
            justifyContent: "space-around",
            paddingTop: "0",
          }}
        >
          {sizeOptions.sizes.map((size) => (
            <Grid.Column
              key={size}
              width="2"
              style={{
                border: "1px solid #b7b7b7",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: ".8rem" }}>{size}</span>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  collection: state.collection,
  minMaxPrices: state.product.minMaxPrices,
});

export default connect(mapStateToProps, { filterCollection })(
  CollectionSidebar
);
