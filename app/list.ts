
import {Component, Input} from 'angular2/core';

export class List {

    populateList(organisationUnits: any): void {

    }
}

/*export function populateList(organisationUnits) {
    const fragment = document.createDocumentFragment();

    // Loop over the organisationUnits and add them to the fragment
    organisationUnits
        .forEach(function (organisationUnit) {
            const element = document.createElement('li');

            // Save the id onto the element so we can use it later to identify which organisationUnit it belongs to
            element.dataset.id = organisationUnit.id;
            element.appendChild(document.createTextNode(organisationUnit.displayName));

            return fragment.appendChild(element);
        });

    const listElement = document.querySelector('.list ul');

    // Clear out the old content
    // This makes sure we don't append to the list and end up with duplicates
    listElement.innerHTML = '';

    // Add the newly created fragement to the listElement
    listElement.appendChild(fragment);
}*/

