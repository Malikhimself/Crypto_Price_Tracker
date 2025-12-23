'use client';

import React, { useState } from 'react';
import { Coin } from '@/lib/api';
import TradingViewWidget from './TradingViewWidget';
import CryptoList from './CryptoList';

export default function Dashboard({ coins }: { coins: Coin[] }) {
    const [selectedSymbol, setSelectedSymbol] = useState(coins[0]?.symbol || 'BTC');
    const [mobileView, setMobileView] = useState<'list' | 'chart'>('list');

    const handleSelect = (symbol: string) => {
        setSelectedSymbol(symbol);
        setMobileView('chart');
    };

    return (
        <div className={`container dashboard-grid ${mobileView === 'chart' ? 'show-chart' : 'show-list'}`}>

            {/* Left Panel: List */}
            <div className="dashboard-list-panel">
                <CryptoList
                    coins={coins}
                    onSelect={handleSelect}
                    selectedSymbol={selectedSymbol}
                />
            </div>

            {/* Right Panel: Chart */}
            <div className="glass p-4 dashboard-chart-panel">
                <button
                    className="back-button"
                    onClick={() => setMobileView('list')}
                >
                    ← Back to List
                </button>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h2 style={{ margin: 0 }}>{selectedSymbol.toUpperCase()} Chart</h2>
                </div>
                <div style={{ flex: 1 }}>
                    <TradingViewWidget symbol={selectedSymbol.toUpperCase()} />
                </div>
            </div>

        </div>
    );
}
