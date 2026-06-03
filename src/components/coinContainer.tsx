import { useEffect, useState } from "react";
import { COINGECKO_API_KEY, URL_API, URL_COINS } from "../constants/api";
import { useParams, Link } from "react-router-dom";

interface CoinData {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  atl: number;
  atl_change_percentage: number;
  last_updated: string;
}

const CoinContainer = () => {
    const [coin, setCoin] = useState<CoinData | null>(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const { id } = useParams()

    useEffect(() => {
        fetch(
            `${URL_API}/${URL_COINS}&x_cg_demo_api_key=${COINGECKO_API_KEY}&ids=${id}`,
        )
            .then((response) => response.json())
            .then((data) => {
                setCoin(data[0]);
                setLoading(false)
            })
            .catch((error) => {
                console.error("Error al obtener los datos:", error);
                setError("Error al cargar la información de la moneda")
                setLoading(false)
            });
    }, [id]);

    const formatNumber = (num: number) => {
        if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`;
        if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
        if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
        if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`;
        return `$${num?.toFixed(2) || '0'}`;
    };

    if (loading) {
        return (
            <div className="max-w-4xl mx-auto p-4">
                <div className="bg-white border rounded-lg p-6 text-center">
                    <p className="text-gray-600">Cargando información...</p>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="max-w-4xl mx-auto p-4">
                <div className="bg-white border rounded-lg p-6 text-center">
                    <p className="text-red-600 mb-4">{error}</p>
                    <Link 
                        to="/" 
                        className="text-blue-600 hover:underline"
                    >
                        Volver al inicio
                    </Link>
                </div>
            </div>
        )
    }

    if (!coin) return null;

    return (
        <div className="max-w-4xl mx-auto p-4 space-y-4">
            {/* Breadcrumb */}
            <div className="text-sm text-gray-500">
                <Link to="/" className="hover:underline">Inicio</Link>
                <span> / </span>
                <span>{coin.name}</span>
            </div>

            {/* Header */}
            <div className="bg-white border rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                    <img 
                        src={coin.image} 
                        alt={`${coin.name} logo`} 
                        className="w-12 h-12 rounded-full"
                    />
                    <div>
                        <h1 className="text-2xl font-bold">{coin.name}</h1>
                        <p className="text-gray-600 uppercase">{coin.symbol}</p>
                        <p className="text-sm text-gray-500">Ranking: #{coin.market_cap_rank}</p>
                    </div>
                </div>

                {/* Precio */}
                <div className="border-t pt-4">
                    <div className="text-3xl font-bold mb-2">
                        ${coin.current_price?.toLocaleString('en-US', { 
                            minimumFractionDigits: 2, 
                            maximumFractionDigits: coin.current_price >= 1 ? 2 : 6 
                        })}
                    </div>
                    <div className={`text-lg ${
                        coin.price_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                        {coin.price_change_percentage_24h >= 0 ? '+' : ''}{coin.price_change_percentage_24h.toFixed(2)}% (24h)
                    </div>
                </div>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border rounded-lg p-4">
                    <h3 className="font-medium text-gray-700 mb-2">Capitalización de Mercado</h3>
                    <p className="text-xl font-bold">{formatNumber(coin.market_cap)}</p>
                    <p className={`text-sm ${
                        coin.market_cap_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                        {coin.market_cap_change_percentage_24h >= 0 ? '+' : ''}{coin.market_cap_change_percentage_24h.toFixed(2)}% (24h)
                    </p>
                </div>

                <div className="bg-white border rounded-lg p-4">
                    <h3 className="font-medium text-gray-700 mb-2">Volumen 24h</h3>
                    <p className="text-xl font-bold">{formatNumber(coin.total_volume)}</p>
                </div>

                <div className="bg-white border rounded-lg p-4">
                    <h3 className="font-medium text-gray-700 mb-2">Máximo 24h</h3>
                    <p className="text-xl font-bold text-green-600">
                        ${coin.high_24h?.toLocaleString()}
                    </p>
                </div>

                <div className="bg-white border rounded-lg p-4">
                    <h3 className="font-medium text-gray-700 mb-2">Mínimo 24h</h3>
                    <p className="text-xl font-bold text-red-600">
                        ${coin.low_24h?.toLocaleString()}
                    </p>
                </div>
            </div>

            {/* Suministro */}
            <div className="bg-white border rounded-lg p-4">
                <h2 className="text-lg font-bold mb-4">Información de Suministro</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center border rounded-lg p-3">
                        <p className="text-sm text-gray-600 mb-1">Suministro Circulante</p>
                        <p className="font-bold">
                            {coin.circulating_supply?.toLocaleString()} {coin.symbol.toUpperCase()}
                        </p>
                    </div>
                    <div className="text-center border rounded-lg p-3">
                        <p className="text-sm text-gray-600 mb-1">Suministro Total</p>
                        <p className="font-bold">
                            {coin.total_supply?.toLocaleString()} {coin.symbol.toUpperCase()}
                        </p>
                    </div>
                    <div className="text-center border rounded-lg p-3">
                        <p className="text-sm text-gray-600 mb-1">Suministro Máximo</p>
                        <p className="font-bold">
                            {coin.max_supply ? `${coin.max_supply.toLocaleString()} ${coin.symbol.toUpperCase()}` : 'No definido'}
                        </p>
                    </div>
                </div>
            </div>

            {/* Precios Históricos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border rounded-lg p-4 text-center">
                    <h2 className="text-lg font-bold mb-2">Máximo Histórico (ATH)</h2>
                    <p className="text-2xl font-bold text-green-600 mb-1">
                        ${coin.ath?.toLocaleString()}
                    </p>
                    <p className={`${
                        coin.ath_change_percentage >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                        {coin.ath_change_percentage >= 0 ? '+' : ''}{coin.ath_change_percentage.toFixed(2)}% desde ATH
                    </p>
                </div>

                <div className="bg-white border rounded-lg p-4 text-center">
                    <h2 className="text-lg font-bold mb-2">Mínimo Histórico (ATL)</h2>
                    <p className="text-2xl font-bold text-red-600 mb-1">
                        ${coin.atl?.toLocaleString()}
                    </p>
                    <p className="text-green-600">
                        +{coin.atl_change_percentage.toFixed(2)}% desde ATL
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CoinContainer;