export interface User {
    userId: String
    email: String
    accountType: String
    createdAt: Date
    updatedAt: Date
    apiKey: String
}

export interface Link {
    linkTitle: String
    url?: String
    description: String
}

export interface ShowsList extends Link {
    shows: [{
        showLocation: String
        onSale: Boolean
        soldOut: Boolean
    }]
}

export interface MusicPlayer extends Link {
    musicPlatforms: [{
        platformName: String
        platformUrl: String
        embedUrl: String
    }]


}




