// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = 4001;
let isWeekday = "friday";
let hasBoughtProductFromITCategory = false;
let hasAttendedDiscountEvent = true;
let isPlatinum = false;

let hasPromotion;


hasPromotion = (lastMonthPaidMoreThan4000 > 4000 && isWeekday === "friday" && !hasBoughtProductFromITCategory && !hasAttendedDiscountEvent) || isPlatinum;
console.log(hasPromotion);
