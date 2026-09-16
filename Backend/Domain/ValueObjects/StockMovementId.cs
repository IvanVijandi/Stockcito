using Domain.Common;

namespace Domain.ValueObjects;

public sealed class StockMovementId : ValueObject
{
    public Guid Value { get; }

    public StockMovementId(Guid value)
    {
        if (value == Guid.Empty)
            throw new ArgumentException("StockMovementId cannot be empty.", nameof(value));

        Value = value;
    }

    public static StockMovementId New() => new(Guid.NewGuid());

    protected override IEnumerable<object?> GetEqualityComponents()
    {
        yield return Value;
    }

    public override string ToString() => Value.ToString();
}

