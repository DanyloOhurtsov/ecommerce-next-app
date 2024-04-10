import getBillboard from "@/actions/get-billboards";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

const HomePage = async () => {
    const billboard = await getBillboard(
        "bd3cb179-450f-4021-bf51-47ef6cc02967"
    );

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
            </div>
        </Container>
    );
};

export default HomePage;
