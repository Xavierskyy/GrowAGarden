import React from "react";

export default function App() {
  // Mock data for Roblox trade stock items with USD prices
  const items = [
    {
      name: "Candy Blossom",
      value: "37b",
      oldPrice: "37$",
      discount: "23%",
      newPrice: "30$",
    },
    {
      name: "Shadow Cloak",
      value: "$80",
      oldPrice: "$120",
      discount: "33%",
      newPrice: "$80",
    },
    {
      name: "Dragon Wings",
      value: "$300",
      oldPrice: "$400",
      discount: "25%",
      newPrice: "$300",
    },
    {
      name: "Space Helmet",
      value: "$60",
      oldPrice: "$90",
      discount: "33%",
      newPrice: "$60",
    },
    {
      name: "Mystic Ring",
      value: "$100",
      oldPrice: "$140",
      discount: "29%",
      newPrice: "$100",
    },
    {
      name: "Fire Staff",
      value: "$220",
      oldPrice: "$300",
      discount: "27%",
      newPrice: "$220",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900 text-white">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-md border-b border-white/10 py-6 px-4 sm:px-6 lg:px-8 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-2">
          <h1 className="text-3xl font-extrabold tracking-tight">
            Roblox Trade Stock Market
          </h1>
          <a
            href="https://discord.gg/YOUR_LINK_HERE "
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-1 text-sm text-indigo-300 hover:text-indigo-100 transition-colors duration-300"
          >
            Join our Discord Server
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <ItemCard key={index} item={item} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-md border-t border-white/10 py-6 px-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Roblox Trade Stock Market. No real money involved.
      </footer>
    </div>
  );
}

// Reusable Item Card Component (no images, no buttons)
function ItemCard({ item }) {
  return (
    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-indigo-500/30 transition-shadow duration-300 border border-white/10">
      <div className="p-5">
        <h2 className="text-xl font-bold mb-3">{item.name}</h2>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Value:</span>
            <span className="font-semibold">{item.value}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Original Price:</span>
            <span className="line-through text-gray-500">{item.oldPrice}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Discount:</span>
            <span className="text-red-400 font-medium">{item.discount}</span>
          </div>
          <div className="flex justify-between items-center pt-1 border-t border-white/5">
            <span className="text-gray-400">New Price:</span>
            <span className="font-bold text-green-400">{item.newPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
}