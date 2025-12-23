
export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  price_change_percentage_24h: number;
}

export async function getTopCoins(): Promise<Coin[]> {
  try {
    const res = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false',
      { next: { revalidate: 60 } }
    );
    if (!res.ok) {
        // Fallback or empty if API limit reached
        console.error("Failed to fetch coins", res.statusText);
        return [];
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching coins:", error);
    return [];
  }
}
