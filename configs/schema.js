
import {  json, jsonb, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const CarListing = pgTable('carListing',{
    
    id: serial('id').primaryKey(),
    listingTitle:varchar('listingTitle').notNull(),
    tagline: varchar('tagline'),
    originalPrice: varchar('originalPrice').notNull(),
    sellingPrice: varchar('sellingPrice').notNull(),
    category: varchar('category').notNull(),
    condition: varchar('condition'),
    type: varchar('type').notNull(),
    mileage: varchar('mileage'),
    make: varchar('make'),
    model: varchar('model').notNull(),
    year: varchar('year').notNull(),
    driveType: varchar('driveType').notNull(),
    engineSize: varchar('engineSize'),
    cylinder: varchar('cylinder'),
    fuelType: varchar('fuelType'),
    registrationNumber: varchar('registrationNumber'),
    vin: varchar('vin').notNull(),
    odometerReading: varchar('odometerReading'),
    doors: varchar('doors'),
    horsepower: varchar('horsepower'),
    torque: varchar('torque'),
    topSpeed: varchar('topSpeed'),
    acceleration: varchar('acceleration'),
    exteriorDimensions: varchar('exteriorDimensions'),
    interiorSpace: varchar('interiorSpace'),
    towingCapacity: varchar('towingCapacity'),
    warrantyYears: varchar('warrantyYears'),
    offerType: varchar('offerType').notNull(),
    listingDescription: varchar('listingDescription').notNull(),
    features: jsonb('features'),

})