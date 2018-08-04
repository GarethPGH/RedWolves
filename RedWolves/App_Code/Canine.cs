using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

public class Canine
{
    public string SpeciesName
    {
        get
        {
            return SpeciesName;
        }
        set
        {
            SpeciesName = this.SpeciesName;
        }

    }
    public string Description
    {
        get
        {
            return Description;
        }
        set
        {
            Description = this.Description;
        }
    }
    public string RecoveryEfforts
    {
        get
        {
            return RecoveryEfforts;
        }
        set
        {
            RecoveryEfforts = this.RecoveryEfforts;
        }
    }
    public string PhotoURL
    {
        get
        {
            return PhotoURL;
        }
        set
        {
            PhotoURL = this.PhotoURL;
        }
    }
    public string FascinatingFacts
    {
        get { return FascinatingFacts; }
        set { FascinatingFacts = this.FascinatingFacts; }
    }
}

public class RedWolf : Canine
{
    public string CoyoteHybrid{
        get{return CoyoteHybrid;}
        set{CoyoteHybrid=this.CoyoteHybrid;}
    }
}

public class Example
{
    public static void Main(string[] args)
    {
        var RWolf = new RedWolf();
        RWolf.SpeciesName = "Red Wolf/Canis Rufus (Canis latrans Rufus/Canis Lupus Rufus)";
        RWolf.Description = "The Red Wolf is a medium sized canine that is of intermediate size between that of a wolf and a coyote. They have reddish brown fur, and like wolves, live in family units called packs. Recent genetic evidence from a study that focused on Eastern Coyotes and Algonquin Wolves, suggests the current species may have resulted from hybridization of wolves, coyotes and dogs with the last ancestral red wolves availible.";

        RWolf.RecoveryEfforts = "Originally left with 12 individuals, the red wolves were captured and placed into breeding programs. They have boosted their numbers from the original 12 to somewhere around 250 animals in the United States. Of these, some have been released into the wild. The wild population currently sustains over 30 individuals.";

        RWolf.CoyoteHybrid = "However, with initial numbers that small, there was a very real possibility that the Red Wolf had already hybridized with coyotes. Known hybrids were originally exterminated in a effort to keep the population \"pure\". Due to the rules regarding Recovery Efforts, the FWS has no provisions for hybridized animals because they are seen as a threat to the target recovery species. Due to this, the protections enacted to return red wolves to the wild may be revoked due to genetic evidence that suggests they are actually hybridized coyotes, and the red wolf may be removed from the Endangered Species List. However, it is very possible that their presence could lead to a new species being developed. Yet, without these wolves in the picture, that may never happen.";

        RWolf.FascinatingFacts ="The Red Wolf is not the only canine species that is in an unknown legal status in the USA. Small wild populations of Carolina Dogs exist in the wild and are known as \"American Dingoes\". They are theroized to be the descendants of the original Native American Indian Dogs. Unlike wolves, they are known to build elaborate dens and hide their droppings, in an attempt to stay hidden from wolves who will likely kill them."; 

        var Wolf = new Canine();
        Wolf.SpeciesName = "Grey Wolf/Canis Lupus";

        Wolf.Description = "These large canines are the ancestral species of modern dogs. Known for travelling in packs ranging from a pair of indidivuals and their pups, to massive units containing 30 or more animals, these canines are highly social and highly intelligent. They originally spanned the globe, however a tenuous relationship with agrarian humans led to persecution over livestock depredation and due to fear. Most ancestral territory throughout the world has been lost due to modernization and intense predator extermination efforts, and many subspecies have been completely extinguished. When the howl of the last wolves in the lower 48 states was heard in the 20s, no one would have ever expected them to return. In 1995, due to public pressure and the desire to return Yellowstone Park to its former glory, plans were made to bring the wolf back home.";

        Wolf.RecoveryEfforts = "In 1995, several pairs of females and males were captured from their wild territory in Canada and flown into prepared pens around Yellowstone Park. The efforts to establish breeding packs was a success and when they were deemed ready, they were released into the wild. Meanwhile, a naturally expanding range came down through Canada, ending up in the wilds of Maine. The wolf was on the endangered species list and programs were set up to deal with the human impact that their return caused, particualarly in the cost of livestock that the wolves occassionally feasted on. This could have taken the form of payouts to grieved ranchers, programs to expand taller fencing, the use of guard animals such as dogs and donkeys to make it harder on the wolves. However, that did little to nothing to quell the \"Shoot and Shovel\" attitude of ranchers occupying wolf territory and hunters who were upset that wolves were eating their preferred game. Active fear campaigns were started in these areas to paint wolves as meanaces. Meanwhile wolves blossomed into a self sustaining population numbering in the thousands of animals in the midwest. In the eastern US, the recovery efforts have been somewhat absent despite the growing population of Timber wolves in the north. In the Southwest, the last wild population of Mexican Grey wolf was discovered and 4 individuals were captured to start a captive breeding program. Packs of Mexican wolves were released in the Arizona/New Mexico area, however despite only numbering somewhere in the 50s recovery has been difficult with much poaching of animals. In 2014, due to socialeconomic pressure and due to the fact that the FWS had hit their sustainable mark, wolves were taken off the Endangered Species List in the Midwest and hunting wolves became a yearly, although limited, event, spurred on by the same groups who supported fear campaigns to get rid of the wolves. Groups continue to lobby Congress to remove protections for all wolves, citing that they are all the same species, despite not having recovered most of their historical range";

        Wolf.FascinatingFacts = "A semi-stable population of wolves has existed on Isle Royale, completely isolated from the mainland population, where they subsist almost entirely on moose. This has led to a long term moose/wolf study to watch population boom and bust over the years. Recently wolves have been discovered off the coast of Canada, living on scattered islands. Unlike most wolves, these wolves are accomplished swimmers and feast heavily on seafood.";

        var Coyote = new Canine();
        Coyote.SpeciesName = "Coyote/Canis latrans";

        Coyote.Description = "A medium to medium small canine who may form packs, but have also been known to hunt and live alone. Most coyotes live in pairs. North eastern varieties coyotes are larger than their desert compatriots and have been found to be coyote/wolf hybrids. Their fur color ranges from a dusky brown to a tan. They are famous for their yips and yowls and have become synonymous with the Wild West.";

        Coyote.RecoveryEfforts = "Coyotes simply survived any and all efforts to exterminate them. Although they can be hunted at any time of the year, and are for the most part, considered vermin, they continue to expand their range and even occupy human cities. They filled the ecological niche left from wolf extermination efforts and thrived because of it. Unfortunately, foxe populations, who are ruthlessly hunted by coyotes, have suffered for it. Coyote populations are considered detrimental to wolf recovery efforts. Although most wolves will outright attack and kill coyotes, wolves have been known to interbreed with them in times of scarcity. This very fact has led to many groups of coyotes or coywolves who display characteristics more suited to wolves, such as a preference for large ungulates (deer) and a tendancy to stay in larger packs instead of breaking off into pairs. However, science is not entirely sure if that is due to a biological reason of being hybridized or due to the fact the population is doing so well. Similar pack like behaviour has been seen in tigers living in the Sunderlands India who were originally known to be solitary, until population numbers dictated the need to share territory.";

        Coyote.FascinatingFacts = "Coyotes are found almost everywhere. The trickster spirit in Native American folklore who first brought Man the invention of Fire, is depicted as a coyote. Coyotes are known to occupy the dens established by other animals, instead of digging their own.";
    }
}
