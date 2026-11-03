"use client"

import { useState } from "react"
import { X, Bell, ShoppingCart } from "lucide-react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface WishlistItem {
  id: string
  name: string
  image: string
  currentPrice: number
  originalPrice?: number
  inStock: boolean
  hasPriceDrop?: boolean
}

const initialItems: WishlistItem[] = [
  {
    id: "1",
    name: "Wireless Noise-Cancelling Headphones",
    image: "/wireless-headphones-black-sleek.jpg",
    currentPrice: 249.99,
    originalPrice: 299.99,
    inStock: true,
    hasPriceDrop: true,
  },
  {
    id: "2",
    name: "Minimalist Leather Watch",
    image: "/minimalist-leather-watch-brown.jpg",
    currentPrice: 189.0,
    inStock: true,
  },
  {
    id: "3",
    name: "Premium Mechanical Keyboard",
    image: "/mechanical-keyboard-rgb-gaming.jpg",
    currentPrice: 159.99,
    originalPrice: 179.99,
    inStock: false,
    hasPriceDrop: true,
  },
  {
    id: "4",
    name: "Portable Bluetooth Speaker",
    image: "/portable-bluetooth-speaker-outdoor.jpg",
    currentPrice: 79.99,
    inStock: true,
  },
]

export default function Wishlist1() {
  const [items, setItems] = useState<WishlistItem[]>(initialItems)

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price)
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="rounded-full bg-muted p-4 mb-4">
          <ShoppingCart className="h-8 w-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">Your wishlist is empty</h3>
        <p className="text-muted-foreground mb-4">Start adding items you love to your wishlist</p>
        <Button>Continue Shopping</Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-foreground">
          My Wishlist
          <span className="ml-2 text-base font-normal text-muted-foreground">({items.length} items)</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <Card key={item.id} className="group relative overflow-hidden">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 z-10 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background"
              onClick={() => removeItem(item.id)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Remove from wishlist</span>
            </Button>

            <div className="relative">
              <AspectRatio ratio={1}>
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="object-cover w-full h-full" />
              </AspectRatio>
              <div className="absolute left-2 top-2 flex flex-col gap-1">
                {item.hasPriceDrop && <Badge className="bg-green-600 hover:bg-green-600 text-white">Price Drop</Badge>}
                {!item.inStock && <Badge variant="secondary">Out of Stock</Badge>}
              </div>
            </div>

            <div className="p-4 space-y-3">
              <h3 className="font-medium text-foreground line-clamp-2 text-sm">{item.name}</h3>

              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">{formatPrice(item.currentPrice)}</span>
                {item.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">{formatPrice(item.originalPrice)}</span>
                )}
              </div>

              {item.inStock ? (
                <Button className="w-full" size="sm">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              ) : (
                <Button variant="outline" className="w-full bg-transparent" size="sm">
                  <Bell className="h-4 w-4 mr-2" />
                  Notify Me
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
