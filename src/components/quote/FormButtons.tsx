import React from 'react';

export function FormButtons() {
  return (
    <div className="flex justify-end space-x-4">
      <button
        type="submit"
        className="px-6 py-2 bg-[#C5A572] hover:bg-[#B89355] text-white rounded-lg transition"
      >
        Teklif Al
      </button>
    </div>
  );
}