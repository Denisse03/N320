<template>
    <section>
        <h1>Slots Lesson One</h1>
        <p>This is the text from the Slot One component.</p>
        <slot>This is slot text from Slot One</slot>
        <custom-button>Click Me!</custom-button>
        <custom-button>Enter Drawing</custom-button>
        <slot name="greeting">No greeting provided</slot>
        <slot name="person">No person provided</slot>
        <custom-button></custom-button>
    </section>
</template>
