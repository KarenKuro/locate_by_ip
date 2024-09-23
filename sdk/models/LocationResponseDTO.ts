/* tslint:disable */
/* eslint-disable */
/**
 * Locate by IP API
 * Location determination by ip
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: kkarenk888@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface LocationResponseDTO
 */
export interface LocationResponseDTO {
    /**
     * 
     * @type {string}
     * @memberof LocationResponseDTO
     */
    lat: string;
    /**
     * 
     * @type {string}
     * @memberof LocationResponseDTO
     */
    lng: string;
    /**
     * 
     * @type {string}
     * @memberof LocationResponseDTO
     */
    country: string;
    /**
     * 
     * @type {string}
     * @memberof LocationResponseDTO
     */
    city: string;
}

/**
 * Check if a given object implements the LocationResponseDTO interface.
 */
export function instanceOfLocationResponseDTO(value: object): value is LocationResponseDTO {
    if (!('lat' in value) || value['lat'] === undefined) return false;
    if (!('lng' in value) || value['lng'] === undefined) return false;
    if (!('country' in value) || value['country'] === undefined) return false;
    if (!('city' in value) || value['city'] === undefined) return false;
    return true;
}

export function LocationResponseDTOFromJSON(json: any): LocationResponseDTO {
    return LocationResponseDTOFromJSONTyped(json, false);
}

export function LocationResponseDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocationResponseDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'lat': json['lat'],
        'lng': json['lng'],
        'country': json['country'],
        'city': json['city'],
    };
}

export function LocationResponseDTOToJSON(value?: LocationResponseDTO | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'lat': value['lat'],
        'lng': value['lng'],
        'country': value['country'],
        'city': value['city'],
    };
}

