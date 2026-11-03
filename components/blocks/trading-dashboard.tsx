"use client"

import { CandlestickChart } from "@/components/trading/candlestick-chart"
import { OrderBook } from "@/components/trading/order-book"
import { TradePanel } from "@/components/trading/trade-panel"
import { PriceTicker } from "@/components/trading/price-ticker"
import { PositionsTable } from "@/components/trading/positions-table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TradingDashboard() {
  return (
    <div className="space-y-4">
      <PriceTicker />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <Card className="lg:col-span-3 bg-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">BTC/USD</CardTitle>
          </CardHeader>
          <CardContent>
            <CandlestickChart height={280} />
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Order Book</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <OrderBook />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <Card className="lg:col-span-3 bg-card">
          <CardHeader className="pb-2">
            <Tabs defaultValue="positions">
              <TabsList>
                <TabsTrigger value="positions">Positions (3)</TabsTrigger>
                <TabsTrigger value="orders">Open Orders</TabsTrigger>
                <TabsTrigger value="history">Trade History</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent>
            <PositionsTable />
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Place Order</CardTitle>
          </CardHeader>
          <CardContent>
            <TradePanel />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default TradingDashboard
