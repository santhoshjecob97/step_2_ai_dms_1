// PDF Template Configuration for Diet Plan Reports
// This module handles the structure and styling of generated PDF documents

export const PDF_STYLES = {
  colors: {
    primary: "#E53935",
    dark: "#B71C1C",
    light: "#FFEBEE",
    text: "#333333",
    lightText: "#666666",
    border: "#EEEEEE",
    success: "#2e7d32",
    warning: "#f57c00",
    info: "#0288d1",
  },
  fonts: {
    title: { size: 24, weight: "bold" },
    heading: { size: 16, weight: "bold" },
    subheading: { size: 12, weight: "bold" },
    body: { size: 10, weight: "normal" },
    small: { size: 8, weight: "normal" },
  },
  spacing: {
    section: 15,
    item: 8,
    line: 5,
  },
};

export const PDF_SECTIONS = {
  HEADER: "header",
  CLIENT_INFO: "clientInfo",
  METRICS: "metrics",
  MACROS: "macros",
  MEAL_PLAN: "mealPlan",
  SHOPPING_LIST: "shoppingList",
  WORKOUT_PLAN: "workoutPlan",
  GUIDELINES: "guidelines",
  FOOTER: "footer",
};

export const PDF_TEMPLATES = {
  // Header section with gym branding
  header: {
    title: "PERSONALIZED DIET & FITNESS PLAN",
    subtitle: "Powered by STEP2 FITNESS GYM",
    tagline: "Chennai's Premier Body Construction Center",
    includeDate: true,
    includeLogo: true,
  },

  // Client information section
  clientInfo: {
    fields: [
      { label: "Name", key: "name" },
      { label: "Age", key: "age" },
      { label: "Gender", key: "gender" },
      { label: "Weight (kg)", key: "weight" },
      { label: "Height (cm)", key: "height" },
      { label: "Activity Level", key: "activity" },
      { label: "Fitness Goal", key: "goal" },
      { label: "Dietary Preference", key: "vegetarian" },
      { label: "Medical Conditions", key: "medical" },
    ],
  },

  // Metrics section with calculations
  metrics: {
    fields: [
      { label: "BMR (Basal Metabolic Rate)", key: "bmr", unit: "kcal/day" },
      { label: "TDEE (Total Daily Energy Expenditure)", key: "tdee", unit: "kcal/day" },
      { label: "Target Daily Calories", key: "targetCal", unit: "kcal" },
      { label: "BMI (Body Mass Index)", key: "bmi", unit: "" },
      { label: "BMI Status", key: "bmiLabel", unit: "" },
      { label: "Daily Water Intake", key: "water", unit: "liters" },
    ],
    includeChart: true,
  },

  // Macronutrient breakdown
  macros: {
    fields: [
      { label: "Protein", key: "protein", unit: "g", color: "#FF6B6B" },
      { label: "Carbohydrates", key: "carbs", unit: "g", color: "#4ECDC4" },
      { label: "Fat", key: "fat", unit: "g", color: "#FFE66D" },
    ],
    includeChart: true,
    chartType: "pie",
  },

  // 7-day meal plan
  mealPlan: {
    duration: "7 Days",
    mealsPerDay: 8,
    includeCalories: true,
    includeMacros: true,
    mealTimes: [
      "Pre-Workout",
      "Breakfast",
      "Mid-Morning",
      "Lunch",
      "Pre-Lunch",
      "Afternoon",
      "Dinner",
      "Post-Workout",
    ],
  },

  // Shopping list
  shoppingList: {
    organizeBy: "category",
    includeQuantities: true,
    includeEstimatedCost: false,
    categories: [
      "Proteins",
      "Vegetables",
      "Fruits",
      "Grains & Cereals",
      "Dairy",
      "Oils & Condiments",
      "Spices & Seasonings",
    ],
  },

  // Weekly workout plan
  workoutPlan: {
    duration: "7 Days",
    includeImages: true,
    includeExerciseCount: true,
    includeDuration: true,
    includeIntensity: true,
  },

  // Nutritional guidelines
  guidelines: {
    sections: [
      {
        title: "Hydration",
        content: "Drink water consistently throughout the day. Aim for the recommended daily intake.",
      },
      {
        title: "Meal Timing",
        content: "Eat meals at consistent times to maintain stable energy levels and metabolism.",
      },
      {
        title: "Portion Control",
        content: "Follow the recommended portion sizes to achieve your fitness goals.",
      },
      {
        title: "Workout Nutrition",
        content: "Consume pre-workout meals 1-2 hours before exercise and post-workout meals within 30 minutes.",
      },
      {
        title: "Sleep & Recovery",
        content: "Aim for 7-9 hours of quality sleep daily for optimal recovery and results.",
      },
      {
        title: "Consistency",
        content: "Stick to the plan for at least 4-6 weeks to see significant results.",
      },
    ],
  },

  // Footer with contact information
  footer: {
    gymName: "STEP2 FITNESS GYM",
    phone: "099624 44002",
    website: "www.step2fitness.com",
    location: "Valasarawakkam, Chennai",
    whatsapp: "099624 44002",
    disclaimer: "This plan is for informational purposes. Consult with a healthcare professional before making significant dietary changes.",
  },
};

export const PDF_PAGE_SETTINGS = {
  orientation: "portrait",
  format: "a4",
  margins: {
    top: 15,
    right: 15,
    bottom: 15,
    left: 15,
  },
  pageWidth: 210,
  pageHeight: 297,
};

export const PDF_EXPORT_OPTIONS = {
  filename: "Diet_Plan_Report.pdf",
  title: "Personalized Diet & Fitness Plan",
  subject: "Diet Plan Report from STEP2 FITNESS GYM",
  author: "STEP2 FITNESS GYM",
  keywords: "diet, fitness, meal plan, workout",
  creator: "Diet Plan Brain App",
};

// Helper function to generate PDF filename with date
export const generatePDFFilename = (clientName) => {
  const date = new Date().toISOString().split("T")[0];
  return `Diet_Plan_${clientName}_${date}.pdf`;
};

// Helper function to format metrics for PDF display
export const formatMetricsForPDF = (metrics) => {
  return {
    bmr: `${metrics.bmr} kcal/day`,
    tdee: `${metrics.tdee} kcal/day`,
    targetCal: `${metrics.targetCal} kcal`,
    bmi: `${metrics.bmi} kg/m²`,
    bmiLabel: metrics.bmiLabel,
    water: `${metrics.water} L`,
    protein: `${metrics.protein}g`,
    carbs: `${metrics.carbs}g`,
    fat: `${metrics.fat}g`,
  };
};

// Helper function to calculate macro percentages
export const calculateMacroPercentages = (protein, carbs, fat, totalCals) => {
  const proteinCals = protein * 4;
  const carbsCals = carbs * 4;
  const fatCals = fat * 9;

  return {
    proteinPct: Math.round((proteinCals / totalCals) * 100),
    carbsPct: Math.round((carbsCals / totalCals) * 100),
    fatPct: Math.round((fatCals / totalCals) * 100),
  };
};

// Helper function to organize meals by day
export const organizeMealsByDay = (meals) => {
  const organized = {};
  meals.forEach((meal) => {
    if (!organized[meal.day]) {
      organized[meal.day] = [];
    }
    organized[meal.day].push(meal);
  });
  return organized;
};

// Helper function to calculate daily totals
export const calculateDailyTotals = (meals) => {
  return {
    totalCalories: meals.reduce((sum, meal) => sum + meal.cal, 0),
    totalProtein: meals.reduce((sum, meal) => sum + meal.p, 0),
    totalCarbs: meals.reduce((sum, meal) => sum + meal.c, 0),
    totalFat: meals.reduce((sum, meal) => sum + meal.f, 0),
  };
};

// Helper function to group shopping items by category
export const groupShoppingByCategory = (items) => {
  const grouped = {};
  items.forEach((item) => {
    const category = item.category || "Other";
    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push(item);
  });
  return grouped;
};

// Color mapping for different sections
export const getSectionColor = (section) => {
  const colorMap = {
    metrics: "#0288d1",
    macros: "#E53935",
    mealPlan: "#2e7d32",
    shoppingList: "#f57c00",
    workoutPlan: "#5e35b1",
    guidelines: "#00897b",
  };
  return colorMap[section] || "#333333";
};

// Font size mapping for different content types
export const getFontSize = (type) => {
  const sizeMap = {
    title: 24,
    heading: 16,
    subheading: 12,
    body: 10,
    small: 8,
    tiny: 6,
  };
  return sizeMap[type] || 10;
};
