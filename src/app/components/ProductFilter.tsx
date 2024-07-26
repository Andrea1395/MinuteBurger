import React from "react";

function ProductFilter() {
  return (
    <div>
      <div className="space-y-4 border-b px-4 lg:px-6 pb-6 border-gray-700">
        <div className="flex flex-row items-center gap-2">
          <input
            type="radio"
            value="tutte"
            name="type"
            className="bg-yellow-800 checked:bg-yellow-400"
          />
          <label>Tutte</label>
        </div>
        <div className="flex flex-row items-center gap-2">
          <input
            type="radio"
            value="classiche"
            name="type"
            className="bg-yellow-800 checked:bg-yellow-400"
          />
          <label>Le Classiche</label>
        </div>
        <div className="flex flex-row items-center gap-2">
          <input
            type="radio"
            value="baby"
            name="type"
            className="bg-yellow-800 checked:bg-yellow-400"
          />
          <label>Le baby</label>
        </div>
        <div className="flex flex-row items-center gap-2">
          <input
            type="radio"
            value="bianche"
            name="type"
            className="bg-yellow-800 checked:bg-yellow-400"
          />
          <label>Le bianche</label>
        </div>
        <div className="flex flex-row items-center gap-2">
          <input
            type="radio"
            value="speciali"
            name="type"
            className="bg-yellow-800 checked:bg-yellow-400"
          />
          <label>Le Speciali</label>
        </div>
        <div className="flex flex-row items-center gap-2">
          <input
            type="radio"
            value="fritto"
            name="type"
            className="bg-yellow-800 checked:bg-yellow-400"
          />
          <label>Pizze fritte e sfiziosità</label>
        </div>
        <div className="flex flex-row items-center gap-2">
          <input
            type="radio"
            value="bevande"
            name="type"
            className="bg-yellow-800 checked:bg-yellow-400"
          />
          <label>Bevande</label>
        </div>
      </div>
    </div>
  );
}

export default ProductFilter;
