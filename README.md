REST Countries API with color theme switcher

![Design preview for the REST Countries API with color theme switcher coding challenge](preview.jpg)

**To do this challenge, you need a good understanding of HTML, CSS, and JavaScript.**

## ⚠️ Please note: this challenge no longer uses a live API

This challenge was originally built around the [REST Countries API](https://restcountries.com). That API has since moved to a paid, account-based service, so its old free endpoints no longer return data. To keep this challenge free and working out of the box, we've included all the country data in a `data.json` file for you to use instead.

You'll still practice the skills this challenge is all about: requesting data, waiting for the response, looping through it, searching, filtering, and rendering it to the page. Working with a local JSON file is very close to working with an API. You fetch the data, handle the response, and shape it into your UI. The main difference is that there's no third-party server in the mix, so you don't need an API key and you won't get blocked by the API going down mid-build.

If you'd like to practice calling a real endpoint, you can host `data.json` yourself (for example, on GitHub Pages) and fetch it over the network. That gives you the same request-and-response flow against a URL you control.

## The challenge

Your challenge is to use the country data in `data.json` to build out the application and get it looking as close to the design as possible.

You can use any JavaScript framework/library on the front-end such as [React](https://react.dev) or [Vue](https://vuejs.org). You also have complete control over which packages you use to do things like fetch the data or style your project.

Your users should be able to:

- See all countries from the data on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

## The data

All 250 countries live in the `data.json` file as an array of country objects. Each object holds everything you need for both the homepage cards and the detail pages.

Here's a trimmed example of a single country object, showing the fields the design uses:

```json
{
  "name": "Germany",
  "nativeName": "Deutschland",
  "capital": "Berlin",
  "region": "Europe",
  "subregion": "Western Europe",
  "population": 83516593,
  "topLevelDomain": [".de"],
  "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "€" }],
  "languages": [{ "iso639_1": "de", "iso639_2": "deu", "name": "German", "nativeName": "Deutsch" }],
  "borders": ["AUT", "BEL", "CZE", "DNK", "FRA", "LUX", "NLD", "POL", "CHE"],
  "alpha3Code": "DEU",
  "flags": {
    "svg": "https://flagcdn.com/de.svg",
    "png": "https://flagcdn.com/w320/de.png"
  }
}
```

Each object includes some extra fields too (such as `alpha2Code`, `callingCodes`, `area`, and `timezones`), so feel free to explore the file and use whatever you need.

### Fields used in the design

| Property | Type | Description |
| --- | --- | --- |
| `name` | string | The country's common name, shown on the cards and detail page |
| `nativeName` | string | The country's name in its native language, shown on the detail page |
| `flags` | object | Flag image URLs in `svg` and `png` formats (served by [flagcdn.com](https://flagcdn.com)) |
| `population` | number | Total population, used on the cards and detail page |
| `region` | string | The region the country belongs to, used by the region filter |
| `subregion` | string | The more specific subregion, shown on the detail page |
| `capital` | string | The capital city |
| `topLevelDomain` | array | The country's top-level domain(s), for example `[".de"]` |
| `currencies` | array | Currency objects, each with a `code`, `name`, and `symbol` |
| `languages` | array | Language objects, each with the language `name` and its codes |
| `borders` | array | The `alpha3Code`s of bordering countries, used to link between detail pages |
| `alpha3Code` | string | The country's three-letter code, used to match `borders` back to countries |

A few small territories have empty or zero values for fields like `capital` or `borders`, so it's worth handling those gracefully in your UI.

### A note about the data

The country data is a point-in-time snapshot rather than a live feed, with population figures reflecting 2024 estimates. That means the numbers won't always match other sources exactly, which is completely fine for this challenge. The flag images are served by [flagcdn.com](https://flagcdn.com), a free flag CDN, so they'll load over the network while everything else comes from your local `data.json`.


