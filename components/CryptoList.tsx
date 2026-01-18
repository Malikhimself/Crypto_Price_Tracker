'use client';

import React from 'react';
import { Coin } from '@/lib/api';

interface CryptoListProps {
    coins: Coin[];
    onSelect: (symbol: string) => void;
    selectedSymbol: string;
}

export default function CryptoList({ coins, onSelect, selectedSymbol }: CryptoListProps) {
    return (
        <div className="glass" style={{ padding: '1rem', overflowY: 'auto', height: '100%', width: '100%', margin: 'auto' }}>
            <h2 style={{ marginTop: 0, marginBottom: '1rem' }}>Top Cryptocurrencies</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', textAlign: 'left' }}>
                        <th style={{ padding: '0.5rem' }}>#</th>
                        <th style={{ padding: '0.5rem' }}>Coin</th>
                        <th style={{ padding: '0.5rem' }}>Price</th>
                        <th style={{ padding: '0.5rem' }}>24h</th>
                    </tr>
                </thead>
                <tbody>
                    {coins.map((coin) => (
                        <tr
                            key={coin.id}
                            onClick={() => onSelect(coin.symbol)}
                            style={{
                                cursor: 'pointer',
                                backgroundColor: selectedSymbol.toLowerCase() === coin.symbol.toLowerCase() ? 'rgba(255,255,255,0.1)' : 'transparent',
                                borderBottom: '1px solid rgba(255,255,255,0.05)'
                            }}
                        >
                            <td style={{ padding: '0.75rem' }}>{coin.market_cap_rank}</td>
                            <td style={{ padding: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <img src={coin.image} alt={coin.name} width={24} height={24} />
                                <span className="font-bold">{coin.symbol.toUpperCase()}</span>
                            </td>
                            <td style={{ padding: '0.75rem' }}>${coin.current_price.toLocaleString()}</td>
                            <td style={{ padding: '0.75rem' }} className={coin.price_change_percentage_24h >= 0 ? 'text-up' : 'text-down'}>
                                {coin.price_change_percentage_24h.toFixed(2)}%
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
