/* =============================================================
   YOUR DISH LIST  —  قائمة الأكلات
   =============================================================
   This is the only file you need to edit to add or remove dishes.

   HOW TO ADD A DISH
   1. Find the protein below (fish / shrimp / chicken / beef).
   2. Add a new line inside its [ ... ] brackets.
   3. Put the dish name between "quotes" and end the line with a comma.

        chicken: [
            "Chicken Kabsa (كبسة دجاج)",
            "My New Dish (اسم الأكلة)",      <-- like this
        ],

   HOW TO REMOVE A DISH
   Delete its whole line.

   Save the file and refresh the page. That's it.
   ============================================================= */

const DISHES = {

    fish: [
        "Sayadieh (صيادية)",
        "Grilled Hamour (هامور مشوي)",
        "Fried Fish with Rice (سمك مقلي مع رز)",
        "Fish Machboos (مچبوس سمك)",
        "Baked Fish with Tahini (صينية سمك بالطحينة)",
        "Fish Curry (كاري سمك)",
        "Salmon with Lemon and Garlic (سلمون بالليمون والثوم)",
        "Fish Kabsa (كبسة سمك)",
        "Grilled Fish with Sayadieh Rice (سمك مشوي مع رز صيادية)",
        "Tuna Pasta (باستا التونة)",
    ],

    shrimp: [
        "Shrimp Machboos (مچبوس روبيان)",
        "Garlic Butter Shrimp (روبيان بالثوم والزبدة)",
        "Shrimp Biryani (برياني روبيان)",
        "Shrimp Curry (كاري روبيان)",
        "Shrimp Pasta (باستا الروبيان)",
        "Grilled Shrimp Skewers (أسياخ روبيان مشوي)",
        "Shrimp Fried Rice (رز مقلي بالروبيان)",
        "Shrimp Salona (صالونة روبيان)",
        "Creamy Shrimp Soup (شوربة روبيان بالكريمة)",
    ],

    chicken: [
        "Chicken Kabsa (كبسة دجاج)",
        "Chicken Machboos (مچبوس دجاج)",
        "Chicken Biryani (برياني دجاج)",
        "Mandi Chicken (مندي دجاج)",
        "Musakhan (مسخن)",
        "Shish Tawook (شيش طاووق)",
        "Chicken Shawarma Plate (صحن شاورما دجاج)",
        "Roast Chicken with Potatoes (دجاج بالفرن مع بطاطس)",
        "Chicken Curry (كاري دجاج)",
        "Chicken Freekeh (فريكة بالدجاج)",
        "Chicken Molokhia (ملوخية بالدجاج)",
        "Fattet Djaj (فتة دجاج)",
        "Chicken Soup with Vermicelli (شوربة دجاج بالشعيرية)",
        "Chicken Pasta Bechamel (باستا دجاج بالبشاميل)",
    ],

    beef: [
        "Beef Kabsa (كبسة لحم)",
        "Lamb Mandi (مندي لحم)",
        "Kofta with Potatoes (كفتة بالبطاطس)",
        "Beef Salona (صالونة لحم)",
        "Meat Biryani (برياني لحم)",
        "Mahshi with Meat (محشي باللحم)",
        "Beef Stroganoff (بيف ستروغانوف)",
        "Steak with Mashed Potatoes (ستيك مع بطاطس مهروسة)",
        "Okra Stew with Meat (بامية باللحم)",
        "Beef Burger (برجر لحم)",
        "Meat Fatteh (فتة لحم)",
        "Beef Shawarma Plate (صحن شاورما لحم)",
        "Maqluba with Meat (مقلوبة باللحم)",
    ],

};
