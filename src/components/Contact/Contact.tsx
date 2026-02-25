import ContactHeader from "./components/ContactHeader";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";

function Contact() {
    return (
        <section>
            <ContactHeader />
            <div className="bg-white py-16">
                <div className="container mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <LeftSection />
                        <RightSection />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
